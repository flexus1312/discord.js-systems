const Snipe = require(`./src/database/Schemas/snipeSchema`)

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