const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID,
BOT_NUMBER: process.env.BOT_NUMBER === undefined ? '' : process.env.BOT_NUMBER,
PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
SUDO: process.env.SUDO === undefined ? '94762280384' : process.env.SUDO,
ANTI_BAD: process.env.ANTI_BAD === undefined ? 'false' : process.env.ANTI_BAD,
auto_voice: process.env.AUTO_VOICE === undefined ? 'false' : process.env.AUTO_VOICE,
auto_sticker: process.env.AUTO_STICKER === undefined ? 'false' : process.env.AUTO_STICKER,
openai: process.env.OPENAI_API === undefined ? 'null' : process.env.OPENAI_API,
MAX_SIZE: process.env.DL_SIZE === undefined ? '100' : process.env.DL_SIZE,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
ALIVE: process.env.ALIVE === undefined ? `Hello im alive now !!` : process.env.ALIVE,
LOGO: process.env.LOGO === undefined ? `https://articles-img.sftcdn.net/f_auto,t_article_cover_xl/auto-mapping-folder/sites/3/2022/11/WhatsApp-will-soon-be-a-multi-device-platform-main.jpg` : process.env.LOGO
};
