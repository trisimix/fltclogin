const mongoose = require("mongoose");
const Schema = mongoose.Schema; //can be: const { Schema } = mongoose; (structuring)

const userSchema = new Schema({
  accessID: String,
  languageID: String,
  dvd: Boolean,
  can8: Boolean,
  audio: Boolean,
  video: Boolean,
  net: Boolean,
  tv: Boolean,
  word: Boolean,
  print: Boolean
});

mongoose.model("User", userSchema);
