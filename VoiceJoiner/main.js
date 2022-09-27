const { Client } = require(`discord.js`);
const { TOKENS, voiceChannel, guildID } = require(`./settings/Config`)
const { joinVoiceChannel }  = require(`@discordjs/voice`)

TOKENS.forEach(async token => {
    let client = new Client({ intents: 3276799 });
    client.on("ready", async client => {
       console.log(client.user.tag + " Bot Activated.")
       const guild = client.guilds.cache.get(guildID);
       const connection = joinVoiceChannel({
         channelId: voiceChannel,
         guildId: guildID,
         adapterCreator: guild.voiceAdapterCreator,
       });
       setInterval(() => {
          const connection = joinVoiceChannel({
            channelId: voiceChannel,
            guildId: guildID,
            adapterCreator: guild.voiceAdapterCreator,
          });
       }, 3600000);
    })
    await client.login(token);    
})