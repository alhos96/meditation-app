import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Divider, Fade } from "@mui/material";
import { LibraryMusic } from "@mui/icons-material";

//helpers
import { editProfile, messageReset, userLoggedOut } from "../store/usersSlice";
import { changeHandler, onSubmit, methods } from "../helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.svg";

function ChangePassword() {
  //helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { patch } = methods;

  //global state
  const error = useSelector((state) => state.users.error);
  const message = useSelector((state) => state.users.message);
  const token = sessionStorage.getItem("token");

  //local state
  const [userInput, setUserInput] = useState({
    newPassword: "",
    oldPassword: "",
    confirmNewPassword: "",
  });
  const [fade, setFade] = useState(false);

  //side effects
  useEffect(() => {
    return () => {
      dispatch(messageReset());
    };
  }, []);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Box className="ChangePassword" sx={{ maxWidth: "500px", margin: "auto", pt: 1 }}>
      <Box
        component="form"
        onSubmit={(e) => {
          onSubmit(e, dispatch, editProfile, `/users/change-password/`, patch, userInput, token);
          setTimeout(() => {
            if (!message) {
              dispatch(userLoggedOut());
              navigate("/login");
            }
          }, 3000);
        }}
        sx={{ width: "85%", margin: "auto" }}
        fullWidth
      >
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
          </Box>
        </Fade>
        <Fade in={fade} timeout={{ enter: 500 }} mountOnEnter unmountOnExit>
          <TextField
            onChange={(e) => changeHandler(e, userInput, setUserInput)}
            name="oldPassword"
            size="medium"
            margin="dense"
            required
            type="password"
            label="Old password"
            fullWidth
          />
        </Fade>
        <br></br>

        <Fade in={fade} timeout={{ enter: 1000 }} mountOnEnter unmountOnExit>
          <TextField
            onChange={(e) => changeHandler(e, userInput, setUserInput)}
            name="newPassword"
            size="medium"
            margin="dense"
            required
            type="password"
            label="New password"
            fullWidth
          />
        </Fade>
        <br></br>
        <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
          <TextField
            onChange={(e) => changeHandler(e, userInput, setUserInput)}
            name="confirmNewPassword"
            size="medium"
            margin="dense"
            required
            type="password"
            label="Confirm password"
            fullWidth
          />
        </Fade>
        <br></br>
        <Fade in={fade} timeout={{ enter: 2000 }} mountOnEnter unmountOnExit>
          <Divider sx={{ mt: 2 }} />
        </Fade>
        <span className="error">{error}</span>
        <span className="success">{message}</span>
        <Fade in={fade} timeout={{ enter: 2500 }} mountOnEnter unmountOnExit>
          <Button sx={{ mt: 3, mb: 2 }} size="large" variant="contained" disableElevation type="submit" children="save" fullWidth />
        </Fade>
        <Fade in={fade} timeout={{ enter: 3000 }} mountOnEnter unmountOnExit>
          <Typography
            onClick={() => {
              navigate("/my-profile");
              dispatch(messageReset());
            }}
            align="center"
            sx={{ mt: 1, color: "#181818" }}
            variant="body2"
          >
            View or Edit your Profile <span className="link">Here!</span>
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
}

export default ChangePassword;
