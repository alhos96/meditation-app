import React, { useEffect, useState } from "react";
import "../assets/styles/audio.css";
import { Box, Typography, Divider, Fade } from "@mui/material";
import { PlayArrow, Pause, Replay, Favorite, FavoriteBorder, LibraryMusic } from "@mui/icons-material";
import Loader from "./Loader";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";
import { getSomething, methods, postSomething } from "../helpers";

function AudioPlayer() {
  //global state
  const token = sessionStorage.getItem("token");
  const url = window.location.pathname;

  //local state
  const [paused, setPaused] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [done, setDone] = useState(false);
  const [song, setSong] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [audio, setAudio] = useState(document.querySelector("audio"));
  const [fade, setFade] = useState(false);
  const [fadeProgressBar, setFadeProgressBar] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  //helpers
  const { get, post } = methods;
  const navigate = useNavigate();

  //functions
  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      setPlaying(true);
      setPaused(false);
      setDone(false);
      setFadeProgressBar(true);
      setDuration(audio.duration);
    } else {
      audio.pause();
      setPlaying(false);
      setPaused(true);
      setDone(false);
    }
  }

  //side effects
  useEffect(() => {
    setAudio(document.querySelector("audio"));
    setFade(true);
  }, []);

  useEffect(() => {
    getSomething(get, url, setSong);
    getSomething(get, `/songs/get-favourites`, setFavourites, token);
    // eslint-disable-next-line
  }, [url]);

  useEffect(() => {
    if (audio !== null) {
      audio.onended = () => {
        setDone(true);
        setPlaying(false);
        setPaused(false);
      };
      audio.ontimeupdate = () => {
        setPosition(audio.currentTime);
      };
    }
  }, [audio]);

  return (
    <>
      {song ? (
        <>
          {" "}
          <Fade in={fade} timeout={{ enter: 1000 }} mountOnEnter unmountOnExit>
            <Divider id="5-mins" width="20%" textAlign="left">
              {song.length} mins
            </Divider>
          </Fade>
          <Fade in={fade} timeout={{ enter: 4000 }} mountOnEnter unmountOnExit>
            <Box className="action-buttons">
              <Typography className="back-to-library white-text">
                <LibraryMusic
                  onClick={() => {
                    navigate("/songs-library");
                  }}
                  className="library-icon"
                  sx={{ fontSize: "32px" }}
                />
              </Typography>

              <Typography
                className="back-to-library"
                id={url.slice(12, url.length)}
                onClick={(e) => {
                  postSomething(post, url, {}, token, setFavourites);
                }}
              >
                {favourites.includes(url.slice(12, url.length)) ? (
                  <Favorite sx={{ fontSize: "38px", mr: 1 }} className="favorite" />
                ) : (
                  <FavoriteBorder sx={{ fontSize: "38px", mr: 1 }} className="favorite" />
                )}
              </Typography>
            </Box>
          </Fade>
          <Fade in={fade} timeout={{ enter: 1500 }}>
            <Box className="AudioPlayer" sx={{ backgroundImage: `url(${song.img})`, mt: 5, mb: 3 }}>
              <audio src={song.song} id="player" preload="metadata" />

              {paused && (
                <Fade in={paused}>
                  <PlayArrow onClick={() => toggleAudio()} className="player-icon" id="play-button" />
                </Fade>
              )}

              {playing && (
                <Fade in={playing}>
                  <Pause onClick={() => toggleAudio()} className="player-icon" id="pause-button" />
                </Fade>
              )}
              {done && (
                <Fade in={done}>
                  <Replay onClick={() => toggleAudio()} className="player-icon" id="replay-button" />
                </Fade>
              )}
            </Box>
          </Fade>
          <ProgressBar position={position} duration={duration} fadeProgressBar={fadeProgressBar} />
          <Fade in={fade} timeout={{ enter: 2000 }} mountOnEnter unmountOnExit>
            <Typography sx={{ mt: 1 }} className="white-text song-title-in-player" align="center">
              {song.title} <br></br>
            </Typography>
          </Fade>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default AudioPlayer;
