const mongoose = require("mongoose");
const { Schema, model } = mongoose;

exports.Song = model(
  "Song",
  new Schema({
    title: String,
    length: Number,
    img: String,
    song: String,
    category: String,
    isRealLength: Boolean,
  })
);
