const { model, Schema } = require("mongoose");

module.exports = model(
  "serverSettings",
  Schema({
    _id: Schema.Types.ObjectId,
    guildID: String,

    banlogChannel: String,
    unbanLogChannel: String,
    kickLogChannel: String,
    jailLogChannel: String,
    muteLogChannel: String,
    unmuteLogChannel: String,
    joinLogChannel: String,
    leaveLogChannel: String,
    messageRemoveLogChannel: String,
    voiceLogChannel: String,
    roleLogChannel: String,
    backupLogChannel: String,
    guardLog: String,
    newPunishmentLogChannel: String,
    secretVoiceChannel: String,
    secretVoiceChannelParent: String,


    banHammerRole: String,
    kickHammerRole: String,
    jailHammerRole: String,
    muteHammerRole: String,
    jailedRole: String,
    boosterRole: String,
    memberRole: String,
    haveLoverRole: String,
    notLoverRole: String,
    lgbtRole: String,

    RoleGuardEnabled: Boolean,
    ChannelGuardEnabled: Boolean,
    GuildGuardEnabled: Boolean,
    BotGuardEnabled: Boolean
  })
);