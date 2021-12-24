import React, { useState, useEffect } from "react";
import { Box, FormControl, Typography, TextField, Button, Divider, Fade } from "@mui/material";

//helpers
import { userLogin, messageReset } from "../store/usersSlice";
import { changeHandler, onSubmit, methods } from "../helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.svg";

function Login() {
  //helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { post } = methods;

  //global state
  const error = useSelector((state) => state.users.error);
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const token = sessionStorage.getItem("token");

  //local state
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [fade, setFade] = useState(false);

  //side effects
  useEffect(() => {
    loggedIn && navigate("/songs-library");
  }, [loggedIn]);

  useEffect(() => {
    setFade(true);
  });

  return (
    <Box className="Login" sx={{ maxWidth: "500px", margin: "auto", pt: 8 }}>
      <Fade in={fade} timeout={{ enter: 500 }} mountOnEnter unmountOnExit>
        <Box
          onClick={() => {
            navigate("/");
          }}
          className="logo"
          sx={{ mb: 8 }}
        >
          {" "}
          <img src={logo} width="250px" />
        </Box>
      </Fade>
      <Box
        component="form"
        onSubmit={(e) => onSubmit(e, dispatch, userLogin, "/users/login", userInput, post, token)}
        sx={{ width: "85%", margin: "auto" }}
      >
        {" "}
        <Fade in={fade} timeout={{ enter: 500 }} mountOnEnter unmountOnExit>
          <TextField
            onChange={(e) => changeHandler(e, userInput, setUserInput)}
            size="medium"
            margin="dense"
            required
            type="text"
            name="email"
            label="Email"
            fullWidth
          />
        </Fade>
        <br></br>
        <Fade in={fade} timeout={{ enter: 1000 }} mountOnEnter unmountOnExit>
          <TextField
            onChange={(e) => changeHandler(e, userInput, setUserInput)}
            size="medium"
            margin="dense"
            required
            type="password"
            name="password"
            label="Password"
            fullWidth
          />
        </Fade>
        <br></br>
        <span className="error">{error}</span>
        <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
          <Button sx={{ mt: 3, mb: 2 }} size="large" variant="contained" disableElevation type="submit" children="login" fullWidth />
        </Fade>
        <Fade in={fade} timeout={{ enter: 1700 }} mountOnEnter unmountOnExit>
          <Divider />
        </Fade>
        <Fade in={fade} timeout={{ enter: 2200 }} mountOnEnter unmountOnExit>
          <Typography
            onClick={() => {
              navigate("/register");
              dispatch(messageReset());
            }}
            align="center"
            sx={{ mt: 1, color: "#181818" }}
            variant="body2"
          >
            Don't have account? <span className="link">Register!</span>
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
}

export default Login;
