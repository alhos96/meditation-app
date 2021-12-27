import React, { useState, useEffect } from "react";
import { Typography, Fade, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Song({ title, image, id }) {
  //helpers
  const navigate = useNavigate();

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
        <div className="filter-on-hover"></div>{" "}
        <Typography className="small-letter-spacing song-title white-text" variant="body2" align="left">
          {title}
        </Typography>
      </Paper>
    </Fade>
  );
}
