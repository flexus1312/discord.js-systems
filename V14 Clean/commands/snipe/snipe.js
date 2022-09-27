const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const Schema = require(`../../src/database/Schemas/snipeSchema`)
const moment = require(`moment`)
moment.locale("tr");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("snipe")
    .setDescription("Snipe Command."),
  async execute(interaction) {
      try {
      const SnipeData = await Schema.find({ guildID: interaction.guild.id });
      let snipes = SnipeData.sort((a, b) => b.Date - a.Date);
      let liste = snipes.map(x => `\`Mesaj: ${x.message}\`  Sahip: <@${x.author}> Silen: <@${x.deleter}> Tarih: ${moment(x.Date).format("LLL")}`)
      let embed = new EmbedBuilder()
      .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({dynamic:true}) })
      .setDescription(`${liste.slice().join('\n')}`)
      .setTimestamp()
      .setFooter({
        text: `${interaction.user.tag}  💖`,
        iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
      })
      await interaction.reply({ embeds: [embed], ephemeral: true })
      } catch (error) {
              await interaction.reply({ content: `Bir Hata Oluştu ${error}`, ephemeral: true })
      }
  },
};
