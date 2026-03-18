const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "8463786752:AAGj9eCtkjw9emqI818CjpmVf3ekF-s0bWw";
const CHANNEL_LINK = "https://t.me/+Fe8o5fbKMntmNzk9";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const text = `Welcome to GARV TRADING💸 

Get daily market insights, powerful charts & easy-to-understand setups.
Upgrade your trading skills step by step with us.

🚀 Learn • Analyze • Grow
📈 Join the smart traders community

Tap the buttons below 👇`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📢 Join Official Channel", url: CHANNEL_LINK }],
        [{ text: "I Joined 👍", callback_data: "joined" }]
      ]
    }
  };

  bot.sendMessage(chatId, text, options);

  setTimeout(() => {
    bot.sendMessage(chatId,
      "⚠️ Disclaimer:\nWe do NOT provide investment advice.\nAll market analysis is ONLY for educational purposes."
    );
  }, 1000);
});

bot.on('callback_query', (query) => {
  if (query.data === 'joined') {
    bot.sendMessage(query.message.chat.id,
      "✅ Thank you for joining!\n\nYou will now receive daily market insights and educational trading setups.\n\nStay tuned! 📈"
    );
    bot.answerCallbackQuery(query.id);
  }
});

console.log("Bot is running...");
