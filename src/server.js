require("dotenv").config({ paht: "./.env" });

const { Telegraf } = require("telegraf");
const commands = require("./commands/sfwPics");
const wallpaperBot = new Telegraf(process.env.TOKEN);

wallpaperBot.start((ctx) => {
  ctx.reply(
    "Hi, I'm a wallpapers bot. Type /help to see all my commands and get satisfactory experience"
  );
});
wallpaperBot.help((ctx) =>
  ctx.reply(
    "SFW(Safe for work) Wallpapers\n /wallpaper - A general wallpaper(mobile,pc) \n/mobile - A mobile wallpaper \n/fantasy - fantasy wallpaper \n/future - future wallpaper \n/anime - anime wallpaper\n NSFW(Not safe for work) Wallpapers\n Not implemeter yet"
  )
);

wallpaperBot.command(
  ["fantasy", "anime", "mobile", "wallpaper", "future"],
  async (ctx) => {
    const command = ctx.message.text.replace("/", "");

    try {
      const pic = await commands[command]();

      ctx.replyWithPhoto(pic);
    } catch (error) {
      ctx.reply("An error has occurred. Please try again");
    }
  }
);
wallpaperBot.launch();
// Enable graceful stop
process.once("SIGINT", () => wallpaperBot.stop("SIGINT"));
process.once("SIGTERM", () => wallpaperBot.stop("SIGTERM"));
