import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Divider, Popover, Fade } from "@mui/material";
import { Edit, Delete, LibraryMusic } from "@mui/icons-material";
//helpers
import { getUserInfo, editProfile, messageReset, userLoggedOut } from "../store/usersSlice";
import { changeHandler, onSubmit, popoverOpen, popoverClose, methods } from "../helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function MyProfile() {
  //helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { get, patch } = methods;

  //global state
  const error = useSelector((state) => state.users.error);
  const message = useSelector((state) => state.users.message);
  const userInfo = useSelector((state) => state.users.user);
  const token = sessionStorage.getItem("token");

  //local state
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    active: true,
  });
  const [willEdit, setWillEdit] = useState(false);
  const [fade, setFade] = useState(false);

  //popper state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  //side effects
  useEffect(() => {
    dispatch(getUserInfo("/users/my-profile", get, token));
    return () => {
      dispatch(messageReset());
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    userInfo && setUserInput({ ...userInput, name: userInfo.name, email: userInfo.email, password: "" });
    // eslint-disable-next-line
  }, [userInfo]);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Box className="ViewProfile" sx={{ maxWidth: "500px", margin: "auto", pt: 1 }}>
      <Popover
        style={{ padding: "10px" }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          popoverClose(setAnchorEl);
          setUserInput({ ...userInput, active: true });
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="body2">Are you sure? Please type your password!</Typography>
          <TextField
            onChange={(e) => changeHandler(e, userInput, setUserInput)}
            size="small"
            margin="dense"
            required
            name="password"
            type="password"
            label="Password"
            fullWidth
          />
          <Button
            sx={{ width: "80px" }}
            variant="primary"
            onClick={(e) => {
              onSubmit(e, dispatch, editProfile, `/users/edit-profile/`, patch, userInput, token);
              dispatch(userLoggedOut());
              if (!message) {
                navigate("/");
              }
            }}
          >
            {" "}
            deactivate
          </Button>
          <Button
            sx={{ ml: 2, width: "80px" }}
            variant="contained"
            disableElevation
            onClick={() => {
              popoverClose(setAnchorEl);
              setUserInput({ ...userInput, active: true });
            }}
          >
            {" "}
            cancel
          </Button>
        </Box>
      </Popover>

      <>
        <Fade in={fade} timeout={{ enter: 4000 }}>
          <Box className="action-buttons" sx={{ mr: 2.5, mb: 2, p: 0.5 }}>
            <Typography>
              <Edit className="edit-profile-button white-text" onClick={() => setWillEdit(true)} sx={{ fontSize: "32px" }} />
            </Typography>

            <Typography>
              <Delete
                sx={{ fontSize: "32px" }}
                className="deactivate-profile-button white-text"
                aria-describedby={id}
                onClick={(e) => {
                  popoverOpen(e, setAnchorEl);
                  setUserInput({ ...userInput, active: false });
                }}
              />
            </Typography>
            <Typography className=" white-text">
              <LibraryMusic
                onClick={() => {
                  navigate("/songs-library");
                }}
                className="library-icon"
                sx={{ mt: 0.3, fontSize: "32px" }}
              />
            </Typography>
          </Box>
        </Fade>

        {userInfo && (
          <Box
            component="form"
            onSubmit={(e) => {
              onSubmit(e, dispatch, editProfile, `/users/edit-profile/`, patch, userInput, token);
              setTimeout(() => {
                if (!message) {
                  dispatch(userLoggedOut());
                  navigate("/login");
                  console.log("object");
                }
              }, 3000);
            }}
            sx={{ width: "85%", margin: "auto" }}
            fullWidth
          >
            <Fade in={fade} timeout={{ enter: 500 }} mountOnEnter unmountOnExit>
              <TextField
                onChange={(e) => changeHandler(e, userInput, setUserInput)}
                size="medium"
                margin="dense"
                required
                type="text"
                label="Name"
                name="name"
                defaultValue={userInfo.name}
                disabled={!willEdit}
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
                type="text"
                label="Email"
                name="email"
                defaultValue={userInfo.email}
                disabled={!willEdit}
                fullWidth
              />
            </Fade>
            <br></br>

            <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
              <Divider sx={{ mt: 2 }} />
            </Fade>
            <span className="error">{error}</span>
            <span className="success">{message}</span>
            <Fade in={fade} timeout={{ enter: 2000 }} mountOnEnter unmountOnExit>
              <Button
                sx={{ mt: 3, mb: 2 }}
                size="large"
                disabled={!willEdit}
                variant="contained"
                disableElevation
                type="submit"
                children="save"
                fullWidth
              />
            </Fade>
            <br></br>
            <Fade in={fade} timeout={{ enter: 2500 }} mountOnEnter unmountOnExit>
              <Typography
                onClick={() => {
                  navigate("/change-password");
                  dispatch(messageReset());
                }}
                align="center"
                sx={{ mt: 1, color: "#181818" }}
                variant="body2"
              >
                Change Your Password <span className="link">Here!</span>
              </Typography>
            </Fade>
          </Box>
        )}
      </>
    </Box>
  );
}

export default MyProfile;
