import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Divider, Fade } from "@mui/material";
//helpers
import { changeHandler, onSubmit, methods } from "../helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister, messageReset } from "../store/usersSlice";
import logo from "../assets/images/logo.svg";

function Register() {
  //helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { post } = methods;

  //global state
  const error = useSelector((state) => state.users.error);
  const isRegistered = useSelector((state) => state.users.registered);

  //local state
  const [userInput, setUserInput] = useState({ email: "", email: "", password: "", confirmPasword: "" });
  const [fade, setFade] = useState(false);

  //side effects
  useEffect(() => {
    isRegistered && navigate("/login");
  }, [isRegistered]);

  useEffect(() => {
    setFade(true);
  });

  return (
    <Box className="Register" sx={{ maxWidth: "500px", margin: "auto", pt: 8 }}>
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
        onSubmit={(e) => onSubmit(e, dispatch, userRegister, "/users/register", userInput, post)}
        sx={{ width: "85%", margin: "auto" }}
      >
        {" "}
        <Fade in={fade} timeout={{ enter: 1000 }} mountOnEnter unmountOnExit>
          <TextField
            onChange={(e) => changeHandler(e, userInput, setUserInput)}
            size="medium"
            margin="dense"
            required
            type="text"
            name="name"
            label="Name"
            fullWidth
          />
        </Fade>
        <br></br>
        <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
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
        <Fade in={fade} timeout={{ enter: 2000 }} mountOnEnter unmountOnExit>
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
        <Fade in={fade} timeout={{ enter: 2500 }} mountOnEnter unmountOnExit>
          <TextField
            onChange={(e) => changeHandler(e, userInput, setUserInput)}
            size="medium"
            margin="dense"
            required
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            fullWidth
          />
        </Fade>
        <br></br>
        <span className="error">{error}</span>
        <Fade in={fade} timeout={{ enter: 3000 }} mountOnEnter unmountOnExit>
          <Button sx={{ mt: 3, mb: 2 }} size="large" variant="contained" disableElevation type="submit" children="register" fullWidth />
        </Fade>
        <Fade in={fade} timeout={{ enter: 3500 }} mountOnEnter unmountOnExit>
          <Divider />
        </Fade>
        <Fade in={fade} timeout={{ enter: 4000 }} mountOnEnter unmountOnExit>
          <Typography
            onClick={() => {
              navigate("/login");
              dispatch(messageReset());
            }}
            align="center"
            sx={{ mt: 1, color: "#181818" }}
            variant="body2"
          >
            Already have account? <span className="link">Login!</span>
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
}

export default Register;
