const express = require("express");
const router = express.Router();

const { getSongs, getOneSong, addFavourites, getFavourites } = require("../controlers/songsControler");

const auth = require("../midleware/auth");

router.get("/get-songs", getSongs);
router.get("/play/:id", getOneSong);
router.get("/get-favourites", auth, getFavourites);
router.post("/play/:id", auth, addFavourites);

module.exports = router;
