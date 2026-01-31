# __PROJECT_NAME__ - Discord Bot

A modern Discord bot built with Discord.js v14 and TypeScript, featuring slash commands and event handling.

## 🚀 Tech Stack

- **Discord.js v14** - Modern Discord API wrapper
- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment

## ✨ Features

- ✅ Slash commands support
- ✅ Event-driven architecture
- ✅ TypeScript for type safety
- ✅ Command handler pattern
- ✅ Environment-based configuration
- ✅ Production-ready structure

## 📁 Project Structure

```
discord-bot/
├── src/
│   ├── commands/         # Slash commands
│   │   ├── ping.ts
│   │   ├── help.ts
│   │   └── userinfo.ts
│   ├── events/           # Event handlers
│   │   ├── ready.ts
│   │   └── interactionCreate.ts
│   ├── utils/            # Utility functions
│   │   └── logger.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   └── index.ts          # Bot entry point
├── .env.example          # Example environment variables
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies
└── README.md            # This file
```

## 🏁 Quick Start

### 1. Create Discord Application

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application"
3. Go to "Bot" tab → Click "Add Bot"
4. Copy the bot token
5. Enable required intents (Message Content, Server Members)

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your bot token and client ID
```

Required variables:
```env
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_application_client_id
GUILD_ID=your_test_server_id (optional, for faster command deployment)
```

### 4. Run the Bot

```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build
npm start
```

## 🔧 Adding Commands

### 1. Create Command File

Create `src/commands/hello.ts`:

```typescript
import { SlashCommandBuilder } from 'discord.js';
import type { CommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('hello')
  .setDescription('Says hello!');

export async function execute(interaction: CommandInteraction) {
  await interaction.reply('Hello! 👋');
}
```

### 2. Register Commands

Commands are auto-registered from the `commands/` folder.

For guild-specific (faster testing):
```bash
# Set GUILD_ID in .env
npm run dev
```

For global commands (takes up to 1 hour):
```bash
# Remove GUILD_ID from .env
npm run dev
```

## 📝 Example Commands

### Ping Command

```typescript
// src/commands/ping.ts
import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with Pong!');

export async function execute(interaction: any) {
  await interaction.reply('Pong!');
}
```

### User Info Command

```typescript
// src/commands/userinfo.ts
import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('userinfo')
  .setDescription('Get info about a user')
  .addUserOption(option =>
    option.setName('target')
      .setDescription('The user')
      .setRequired(true)
  );

export async function execute(interaction: any) {
  const user = interaction.options.getUser('target');
  await interaction.reply(`Username: ${user.tag}\\nID: ${user.id}`);
}
```

## 🎫 Bot Intents

Required intents (enabled in Developer Portal → Bot → Privileged Gateway Intents):

- **Guilds** - Access server information
- **GuildMessages** - Read messages (optional)
- **MessageContent** - Read message content (if needed)
- **GuildMembers** - Access member list (if needed)

Update in code (`src/index.ts`):
```typescript
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
```

## 🚀 Deployment

### Option 1: Railway

1. Push to GitHub
2. Connect Railway to your repo
3. Add environment variables (DISCORD_TOKEN)
4. Deploy!

### Option 2: Heroku

```bash
# Install Heroku CLI
heroku create
heroku config:set DISCORD_TOKEN=your_token
git push heroku main
```

### Option 3: VPS (DigitalOcean, Linode)

```bash
# SSH into server
npm install
npm run build
npm install -g pm2
pm2 start dist/index.js --name discord-bot
pm2 save
pm2 startup
```

### Option 4: Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 🔐 Security Best Practices

- ✅ Never commit `.env` file
- ✅ Keep bot token secret
- ✅ Use environment variables for sensitive data
- ✅ Implement command cooldowns
- ✅ Validate user permissions
- ✅ Handle errors gracefully

## 📚 Resources

- [Discord.js Guide](https://discordjs.guide/)
- [Discord.js Documentation](https://discord.js.org/)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Slash Commands Guide](https://discord.com/developers/docs/interactions/application-commands)

## 🐛 Common Issues

**Bot not responding?**
- Check bot is online in Discord server
- Verify bot has required permissions
- Check console for errors
- Ensure intents are enabled

**Commands not showing?**
- Wait up to 1 hour for global commands
- Use guild commands for faster testing
- Verify CLIENT_ID is correct
- Re-run the bot to register commands

**Permission errors?**
- Bot needs "applications.commands" scope
- Check role permissions in server
- Ensure bot role is above target roles

## 📄 License

MIT License
