import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography, Button, IconButton, Divider, Fade } from "@mui/material";
import { userLogin } from "../store/usersSlice";
import { changeHandler, onSubmit, methods } from "../helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import api from "../store/midleware/api";
import logo from "../assets/images/logo.svg";
import Facebook from "./Facebook";

function Home() {
  //helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { get } = methods;

  //global state
  const token = sessionStorage.getItem("token");
  const loggedIn = useSelector((state) => state.users.loggedIn);

  //local state
  const [fade, setFade] = useState(false);

  //side effects
  useEffect(() => {
    setFade(true);
  });

  useEffect(() => {
    loggedIn && navigate("/songs-library");
  }, [loggedIn]);

  return (
    <Box className="HomeWrapp" sx={{ textAlign: "center", pt: 8 }}>
      <Fade in={fade} timeout={{ enter: 1000 }}>
        <Box className="logo" sx={{ mb: 11 }}>
          {" "}
          <img src={logo} width="250px" />
        </Box>
      </Fade>
      <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
        <Box>
          <Button
            onClick={() => {
              navigate("/login");
            }}
            sx={{ mb: 1 }}
            size="large"
            disableElevation
            variant="contained"
          >
            login
          </Button>
          <br></br>
          <Divider>
            <span className="ornament white-text">or</span>
          </Divider>
          <Button
            onClick={() => {
              navigate("/register");
            }}
            sx={{ mt: 1 }}
            size="large"
            disableElevation
            variant="contained"
          >
            register
          </Button>
          <Facebook />
        </Box>
      </Fade>

      <Box sx={{ mt: 8 }}>
        {" "}
        <Fade in={fade} timeout={{ enter: 2000 }} mountOnEnter unmountOnExit>
          <Typography className="ornament" id="home-page-quote" align="center" variant="body2" component="p" fontSize="25px">
            Sleep more. Stress less.<br></br> Live better.
          </Typography>
        </Fade>
        <Divider sx={{ width: "50%", margin: "auto", mt: 1, mb: 1 }}></Divider>{" "}
        <Fade in={fade} timeout={{ enter: 2500 }} mountOnEnter unmountOnExit>
          <Typography
            onClick={() => {
              navigate("/how-it-works");
            }}
            className="white-text"
            id="how-it-works"
            align="center"
            variant="body2"
            fontSize="small"
            component="p"
          >
            How it works?
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
}

export default Home;
