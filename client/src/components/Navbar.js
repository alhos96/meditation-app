import React, { useState, useEffect } from "react";
import { Box, Fade } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logo from "../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  //helpers
  const navigate = useNavigate();

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Fade in={fade} timeout={{ enter: 2000 }}>
      <Box className="Navbar">
        <Box
          onClick={() => {
            navigate("/songs-library");
          }}
        >
          {" "}
          <img alt="logo" className="navbar-logo" width="inherit" src={logo} />
        </Box>

        <AccountCircle
          className="account-circle"
          onClick={() => {
            navigate("/profile");
          }}
          sx={{ marginLeft: "auto", fontSize: "28px" }}
        />
      </Box>
    </Fade>
  );
}

export default Navbar;
