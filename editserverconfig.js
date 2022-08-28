const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, GuildMember, Permissions, Guild } = require('discord.js')
const ServerConfig = require("../../src/database/schemas/general/serverSettings");
const { Types } = require("mongoose");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("editserverconfig")
    .setDescription("Sunucu Ayarı Değiştirir.")
    .addStringOption(option =>
      option
        .setName("type")
        .setDescription("Görülcek İşlem.")
        .setRequired(true)
        .addChoice(`Kanal Ayarla`, `setchannel`)
        .addChoice(`Rol Ayarla`, `setrole`)
        .addChoice(`Aç-Kapat`, `booleansystems`)
    )
    .addStringOption(option =>
      option
        .setName("wherechannelset")
        .setDescription("Hangi Kanal Ayarlancak.")
        .addChoice(`Ban Log`, `banlog`)
        .addChoice(`Kick Log`, `kicklg`)
        .addChoice(`Jail Log`, `jaillog`)
        .addChoice(`Mute Log`, `mutelog`)
        .addChoice(`Unmute Log`, `unmutelog`)
        .addChoice(`Join Log`, `joinlog`)
        .addChoice(`Leave Log`, `leavelog`)
        .addChoice(`Message Log`, `messagelog`)
        .addChoice(`Voice Log`, `voicelog`)
        .addChoice(`Role Log`, `rolelog`)
        .addChoice(`Backup Log`, `backuplog`)
        .addChoice(`Guard Log`, `guardlog`)
        .addChoice(`Punishment Log`, `punishmentlog`)
        .addChoice(`Secret Voice Channel Creater`, `secretvoicechannel`)
        .addChoice(`Secret Voice Channel Parent`, `secretvoiceparent`)
    )
    .addStringOption(option =>
      option
        .setName("whereroleset")
        .setDescription("Hangi Rol Ayarlancak.")
        .addChoice(`Ban Hammer`, `banhammer`)
        .addChoice(`Kick Hammer`, `kickhammer`)
        .addChoice(`Jail Hammer`, `jailhammer`)
        .addChoice(`Mute Hammer`, `mutehammer`)
        .addChoice(`Jailed Role`, `jailedrole`)
        .addChoice(`Booster Role`, `boosterrole`)
        .addChoice(`Member Role`, `memberrole`)
        .addChoice(`Have Lover`, `havelover`)
        .addChoice(`Havent Lover`, `haventlover`)
        .addChoice(`Lgbt`, `lgbt`)
    )
    .addStringOption(option =>
      option
        .setName("wheresystem")
        .setDescription("Hangi Rol Ayarlancak.")
        .addChoice(`Role Guard`, `roleguard`)
        .addChoice(`Channel Guard`, `channelguard`)
        .addChoice(`Guild Guard`, `guildguard`)
        .addChoice(`Bot Guard`, `botguard`)
    )
    .addChannelOption(option =>
      option
        .setName("setchannel")
        .setDescription("Ayarlancak Kanal.")
    )
    .addRoleOption(option =>
      option
        .setName("setrole")
        .setDescription("Ayarlancak Rol.")
    )
    .addBooleanOption(option =>
      option
        .setName("boolean")
        .setDescription("Durum.")
    ),
  async execute(interaction) {
    const type = interaction.options.getString("type");
    const wherechannel = interaction.options.getString("wherechannelset");
    const wheresystem = interaction.options.getString("wheresystem");
    const whererole = interaction.options.getString("whereroleset");
    const channel = interaction.options.getChannel("setchannel");
    const role = interaction.options.getRole("setrole");
    const opened = interaction.options.getBoolean("boolean");
     if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        return interaction.reply({ content: `>**Bu Komutu Kullanabilmeniz için Gerekli Yetkiniz Bulunmuyor.**` })
    } 
    if(type === "setchannel") {
        switch (wherechannel) {
          case "banlog":
            try {
                 if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { banlogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Banlog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
          case "kicklg":
              try {
                 if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { kickLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `KickLog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
          case "jaillog":
              try {
                  if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { jailLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Jaillog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                              await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "mutelog":
              try {
                 if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { muteLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Mutelog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "unmutelog":
              try {
                 if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { unmuteLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Unmutelog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "joinlog":
              try {
                 if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { joinLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Joinlog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "leavelog":
              try {
                if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { leaveLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Leavelog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "messagelog":
              try {
                 if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { messageRemoveLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Messagelog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "voicelog":
              try {
                  if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { voiceLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Voicelog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "rolelog":
              try {
                if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { roleLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Rolelog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "backuplog":
              try {
                if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { backupLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Backuplog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "guardlog":
              try {
                if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { guardLog: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Guardlog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "punishmentlog":
              try {
                if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { newPunishmentLogChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Punishmentlog Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "secretvoicechannel":
              try {
                if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { secretVoiceChannel: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Secretvoice Kanalı İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })

            }
            break;
          case "secretvoiceparent":
              try {
                 if (channel) {
                const filter = { guildID: interaction.guild.id };
                const update = { secretVoiceChannelParent: channel.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({
                  content: `Secret Voice Parent Kategorisi İçin <#${channel.id}> Başarıyla Ayarlandı.`,
                });
            } else {
                await interaction.reply({ content: `Lütfen Kanal Giriniz.` });
            }
            } catch (error) {
                                                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
        }
    }
    if(type === "setrole") {
        switch (whererole) { 
          case "banhammer":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { banHammerRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Ban Hammer Rolü İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "kickhammer":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { kickHammerRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Kick Hammer Rolü İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "jailhammer":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { jailHammerRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Jail Hammer İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "mutehammer":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { muteHammerRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Mute Hammer Rolü İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "jailedrole":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { jailedRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Jailed Rolü İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "boosterrole":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { boosterRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Booster Rolü İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "memberrole":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { memberRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Member Rolü İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "havelover":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { haveLoverRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Havelover Rolü İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "haventlover":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { notLoverRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Haventlover Rolü İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "lgbt":
            try {
                 if (role) {
                const filter = { guildID: interaction.guild.id };
                const update = { lgbtRole: role.id };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Lgbt Rolü İçin <@&${role.id}> Başarıyla Ayarlandı.` });
            } else {
                await interaction.reply({ content: `Lütfen Rol Giriniz.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
      }
    }
    if(type === "booleansystems") {
      switch (wheresystem) { 
         case "roleguard":
            try {
                 if (opened) {
                const filter = { guildID: interaction.guild.id };
                const update = { RoleGuardEnabled: opened };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Roleguard Durumu İçin ${opened} Başarıyla Ayarlandı.` });
            } else {
                 const filter = { guildID: interaction.guild.id };
                const update = { RoleGuardEnabled: false };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Roleguard Durumu İçin ${opened} Başarıyla Ayarlandı.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "channelguard":
            try {
                 if (opened) {
                const filter = { guildID: interaction.guild.id };
                const update = { ChannelGuardEnabled: opened };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Channelguard Durumu İçin ${opened} Başarıyla Ayarlandı.` });
            } else {
                 const filter = { guildID: interaction.guild.id };
                const update = { ChannelGuardEnabled: false };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Channelguard Durumu İçin ${opened} Başarıyla Ayarlandı.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "guildguard":
            try {
                 if (opened) {
                const filter = { guildID: interaction.guild.id };
                const update = { GuildGuardEnabled: opened };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Guildguard Durumu İçin ${opened} Başarıyla Ayarlandı.` });
            } else {
                 const filter = { guildID: interaction.guild.id };
                const update = { GuildGuardEnabled: false };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Guildguard Durumu İçin ${opened} Başarıyla Ayarlandı.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
            case "botguard":
            try {
                 if (opened) {
                const filter = { guildID: interaction.guild.id };
                const update = { BotGuardEnabled: opened };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Botguard Durumu İçin ${opened} Başarıyla Ayarlandı.` });
            } else {
                 const filter = { guildID: interaction.guild.id };
                const update = { BotGuardEnabled: false };
                const data = await ServerConfig.findOneAndUpdate(
                  filter,
                  update
                );
                await interaction.reply({ content: `Botguard Durumu İçin ${opened} Başarıyla Ayarlandı.` });
            }
            } catch (error) {
                await interaction.reply({ content: "Bir Hata Oluştu", ephemeral: true })
            }
            break;
       }
    }
  }
};