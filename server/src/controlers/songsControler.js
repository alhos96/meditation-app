const { Song } = require("../models/songModel");
const { User } = require("../models/userModel");

exports.getSongs = async (req, res, next) => {
  let songs;

  try {
    songs = await Song.find();
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ data: songs });
};

exports.getOneSong = async (req, res, next) => {
  let song;
  let id = req.params.id;
  try {
    song = await Song.findById(id);
  } catch (error) {
    res.status(203).json({ message: "No song" });

    return next(error);
  }
  res.status(201).json({ data: song });
};

exports.addFavourites = async (req, res, next) => {
  const { userId } = req.userData;
  const songId = req.params.id;

  let user;

  user = await User.findById(userId);

  if (user.favourites.includes(songId)) {
    indexOfId = user.favourites.indexOf(songId);

    user.favourites.splice(indexOfId, 1);

    await user.save();
  } else {
    user.favourites.push(songId);
    await user.save();
  }

  res.status(200).json({ data: user.favourites });
};

exports.getFavourites = async (req, res, next) => {
  const { userId } = req.userData;

  let user;

  user = await User.findById(userId);

  res.status(200).json({ data: user.favourites });
};
