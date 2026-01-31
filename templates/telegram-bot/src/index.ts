import TelegramBot from 'node-telegram-bot-api';
import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN!;
const bot = new TelegramBot(token, { polling: true });

console.log('🤖 Telegram bot started!');

// /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '👋 Welcome! I am __PROJECT_NAME__ bot.\n\nAvailable commands:\n/help - Show help\n/ping - Test bot\n/about - About this bot');
});

// /help command
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '📚 Available commands:\n\n/start - Start the bot\n/ping - Check if bot is alive\n/about - Information about this bot\n/help - Show this message');
});

// /ping command
bot.onText(/\/ping/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🏓 Pong! Bot is alive and working.');
});

// /about command
bot.onText(/\/about/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '🤖 __PROJECT_NAME__\n\nA Telegram bot built with TypeScript and node-telegram-bot-api.\n\nVersion: 1.0.0');
});

// Handle all other messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Ignore commands
  if (text?.startsWith('/')) return;

  // Echo back
  if (text) {
    bot.sendMessage(chatId, `You said: ${text}\n\nType /help for available commands.`);
  }
});

// Handle inline keyboard callbacks
bot.on('callback_query', (query) => {
  const chatId = query.message!.chat.id;
  const data = query.data;

  bot.answerCallbackQuery(query.id, { text: 'Processing...' });
  bot.sendMessage(chatId, `You clicked: ${data}`);
});

// Error handling
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});

process.on('SIGINT', () => {
  console.log('🛑 Stopping bot...');
  bot.stopPolling();
  process.exit(0);
});
