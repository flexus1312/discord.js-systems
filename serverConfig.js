const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, GuildMember, Permissions, Guild } = require('discord.js')
const ServerConfig = require("../../src/database/schemas/general/serverSettings");
const { Types } = require("mongoose");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('createserverdata')
    .setDescription('Sunucu Ayarı Oluşturur.'),
  async execute (interaction) {
    try {
         var newServerConfig = new ServerConfig({
           _id: new Types.ObjectId(),
           guildID: interaction.guild.id,
         });
         newServerConfig.save();
         await interaction.reply({ content: "Sunucu Kurulumu Başarılı", ephemeral: true })
    } catch (error) {
         await interaction.reply({ content: "Sunucu Kurulumu Başarısız.", ephemeral: true })
    }
  }
}