const { Client, AuditLogEvent } = require('discord.js')
const client = new Client({ intents: 3276799 });
const { BOT } = require('./src/Settings/Config')
const Snipe = require(`./src/database/Schemas/snipeSchema`)
require("./src/handlers/commandLoader.js")
require("./src/handlers/eventHandler.js")(client)
require("./src/handlers/commandHandler.js")(client)
require("./src/database/mongooseConnector.js").connectMongo()

client.login(BOT.token)

client.on(`messageDelete`, async message => {
    let entry = await message.guild.fetchAuditLogs({ type: AuditLogEvent.MessageDelete }).then(audit => audit.entries.first());
    const deleter = entry.executor.id;

    const newSnipe = new Snipe({
        guildID: message.guild.id,
        message: message.content,
        author: message.author.id,
        deleter: deleter,
        Date: Date.now()
    })
    newSnipe.save()
})

client.on(`ready`, async () => {

})