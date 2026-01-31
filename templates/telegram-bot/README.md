# __PROJECT_NAME__ - Telegram Bot

Modern Telegram bot with TypeScript and node-telegram-bot-api.

## 🚀 Quick Start

```bash
npm install
cp .env.example .env
# Add your TELEGRAM_BOT_TOKEN
npm run dev
```

## 📝 Get Bot Token

1. Message [@BotFather](https://t.me/BotFather) on Telegram
2. Send `/newbot`
3. Follow instructions
4. Copy token to `.env`

## 🎯 Features

- ✅ TypeScript
- ✅ Command handlers
- ✅ Message handling
- ✅ Inline keyboards
- ✅ Error handling

## 📦 Deploy

**Railway/Render**: Push to GitHub → Deploy
**Heroku**: `git push heroku main`
**VPS**: `npm run build && pm2 start dist/index.js`
