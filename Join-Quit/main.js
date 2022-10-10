client.on("guildCreate", async guild => {
    const JoinChannel = client.channels.cache.get("1015314487840084028");

    const JoinEmbed = new EmbedBuilder()
      .setTitle(`Sunucuya Eklendim!`)
      .addFields(
        { name: `Sunucu İsmi`, value: `${guild.name}` },
        { name: `Sunucu ID`, value: `${guild.id}` },
        { name: `Sunucu Sahibi ID`, value: `<@${guild.ownerId}>` },
        { name: `Üye Sayısı`, value: `${guild.memberCount}` }
      )
      .setAuthor({
        name: guild.name,
        iconURL: guild.iconURL({ dynamic: true }),
      })
      JoinChannel.send({ embeds: [ JoinEmbed ] })
})

client.on("guildDelete", async (guild) => {
  const QuitChannel = client.channels.cache.get("1015314487840084028");

  const QuitEmbed = new EmbedBuilder()
    .setTitle(`Sunucudan Atıldım!`)
    .addFields(
      { name: `Sunucu İsmi`, value: `${guild.name}` },
      { name: `Sunucu ID`, value: `${guild.id}` },
      { name: `Sunucu Sahibi ID`, value: `${guild.ownerId}` },
      { name: `Üye Sayısı`, value: `${guild.memberCount}` }
    )
    .setAuthor({
      name: guild.name,
      iconURL: guild.iconURL({ dynamic: true }),
    });
    QuitChannel.send({ embeds: [QuitEmbed] });
});