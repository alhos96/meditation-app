require("dotenv").config();
const { Song } = require("../models/songModel");
const mongoose = require("mongoose");
const songs = require("./songs");
const config = require("../../config");

mongoose.connect(config.mongo).then(() => {
  mongoose.connection.collections["songs"].drop(function (err) {
    console.log("songs collection dropped");
  });

  seed();
});

var done = 0;

function seed() {
  songs.forEach(async (song, i) => {
    let newSong = new Song({
      title: song.title,
      length: song.length,
      img: song.img,
      song: song.song,
      category: song.category,
      isRealLength: song.isRealLength,
    });

    try {
      await newSong.save();
      done++;
    } catch (error) {
      console.log(error);
    }

    if (done === songs.length) {
      console.log("seeding songs done");
      mongoose.disconnect();
    }
  });
}
