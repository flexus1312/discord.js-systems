const { Client, Collection, Intents, MessageEmbed, PermissionOverwriteManager } = require('discord.js')
const client = global.client = new Client({ intents: 3276799 })
const { BOT } = require("./Configs/Config")
const Tokens = BOT.Tokens;




const axios = require("axios")
async function setUrl(url, guild, token, client, setUrlInterval) {
      let cacheguild = client.guilds.cache.get(guild); // Sunucu Guild
      setInterval(() => {
        axios({
          method: "patch",
          url: `https://discord.com/api/v9/guilds/${guild}/vanity-url`,
          data: { code: url },
          headers: { authorization: `Bot ${token}` },
        }).catch(() => {
          console.log("Url Gelmedi AMK!");
        });
      }, setUrlInterval);
}

Tokens.forEach(async token => {
    let Bot = new Client({ intents: 3276799 });
    Bot.on("ready", async client => {
       console.log(client.user.tag + " Bot Activated.")
       await setUrl("midgardyeassa", BOT.guildID, Bot.token, Bot, BOT.setUrlInterval);
    })
    await Bot.login(token)    
})