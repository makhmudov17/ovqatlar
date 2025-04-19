import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import "dotenv/config";

const bot = new Telegraf(process.env.TELEGRAM_TOKEN, { polling: true });

bot.start((ctx) =>
  ctx.reply("Welcome to our food bot", {
    reply_markup: {
      inline_keyboard: [[{ text: "Davom etish", callback_data: "continue" }]],
    },
  })
);

bot.on("callback_query", (ctx) => {
  const res = ctx.update.callback_query.data;
  if (res == "continue") {
    const keyboard = [
      [{ text: "Region" }, { text: "Category" }, { text: "Name" }],
      [{ text: "Ingredient" }, { text: "Random" }],
    ];
    // console.log(text);
    ctx.reply("Iltimos yo'nalishni tanlang", {
      reply_markup: {
        keyboard: keyboard,
        resize_keyboard: true,
      },
    });
  }
});
bot.on("text", (ctx) => {
  const apiName=ctx.update.message.text
  if(apiName=='Category'){

  }  


});

bot.launch();
