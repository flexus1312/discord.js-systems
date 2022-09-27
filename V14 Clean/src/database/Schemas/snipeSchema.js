const { Schema, model } = require("mongoose");

const schema = Schema({
  guildID: String,
  message: String,
  author: String,
  deleter: String,
  Date: Date
});

module.exports = model("snipe", schema);
