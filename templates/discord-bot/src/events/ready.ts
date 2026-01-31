import { Client, Events, REST, Routes } from 'discord.js';

export const name = Events.ClientReady;
export const once = true;

export async function execute(client: Client) {
  console.log(`✅ Logged in as ${client.user?.tag}`);

  // Register slash commands
  const commands = [];
  for (const [name, command] of client.commands) {
    commands.push(command.data.toJSON());
  }

  const rest = new REST().setToken(process.env.DISCORD_TOKEN!);

  try {
    console.log(`🔄 Registering ${commands.length} slash commands...`);

    // Register commands (guild for testing, global for production)
    if (process.env.GUILD_ID) {
      // Guild commands (update instantly)
      await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID),
        { body: commands },
      );
      console.log('✅ Guild commands registered!');
    } else {
      // Global commands (takes up to 1 hour)
      await rest.put(
        Routes.applicationCommands(process.env.CLIENT_ID!),
        { body: commands },
      );
      console.log('✅ Global commands registered!');
    }
  } catch (error) {
    console.error('❌ Error registering commands:', error);
  }
}
