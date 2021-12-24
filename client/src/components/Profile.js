import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Divider, Fade } from "@mui/material";
import { LibraryMusic } from "@mui/icons-material";
//helpers
import { userLoggedOut } from "../store/usersSlice";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Profile() {
  //helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Box className="Profile" sx={{ textAlign: "center", width: "85%", margin: "auto", pt: 2 }}>
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
        <Button
          onClick={() => {
            navigate("/my-profile");
          }}
          sx={{ mb: 2, mt: 2 }}
          size="large"
          variant="contained"
          disableElevation
          fullWidth
        >
          Account details
        </Button>
      </Fade>
      <Fade in={fade} timeout={{ enter: 1000 }} mountOnEnter unmountOnExit>
        <Button
          onClick={() => {
            navigate("/change-password");
          }}
          sx={{ mb: 2 }}
          size="large"
          variant="contained"
          disableElevation
          fullWidth
        >
          Change Password
        </Button>
      </Fade>
      <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
        <Button
          onClick={() => {
            navigate("/my-stats");
          }}
          sx={{ mb: 2 }}
          size="large"
          variant="contained"
          disableElevation
          fullWidth
        >
          My Stats
        </Button>
      </Fade>
      <Fade in={fade} timeout={{ enter: 2000 }} mountOnEnter unmountOnExit>
        <Button
          onClick={() => {
            dispatch(userLoggedOut());
            navigate("/");
          }}
          sx={{ mb: 2 }}
          size="large"
          variant="contained"
          disableElevation
          fullWidth
        >
          Log Out
        </Button>
      </Fade>
      <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
        <Divider sx={{ mb: 2, mt: 2 }}></Divider>
      </Fade>
      <Fade in={fade} timeout={{ enter: 2400 }} mountOnEnter unmountOnExit>
        <Typography className="ornament" id="home-page-quote" align="center" variant="body2" component="p" fontSize="20px">
          Sleep more. Stress less.<br></br> Live better.
        </Typography>
      </Fade>
    </Box>
  );
}

export default Profile;
