import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import { Typography, Fade, Paper } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister, messageReset } from "../store/usersSlice";
import logo from "../assets/images/girl-meditating.svg";

export default function Song({ title, image, length, isRealLength, id }) {
  //helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Fade in={fade} timeout={{ enter: 2500 }}>
      <Paper
        id={id}
        onClick={(e) => {
          navigate(`/songs/play/${e.currentTarget.id}`);
        }}
        className="song-card"
        elevation={0}
        sx={{ backgroundImage: `url(${image})`, cursor: "pointer" }}
      >
        {isRealLength && <WorkspacePremiumIcon sx={{ color: "green", marginLeft: "60%", fontSize: "32px" }} />}
        <div className="filter-on-hover"></div>{" "}
        <Typography className="small-letter-spacing song-title white-text" variant="body2" align="left">
          {title}
        </Typography>
      </Paper>
    </Fade>
  );
}
