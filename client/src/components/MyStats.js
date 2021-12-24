import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Divider, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import premiumFeature from "../assets/images/premium-feature.png";

function MyStats() {
  const navigate = useNavigate();

  //local state
  const [fade, setFade] = useState(false);
  const [premium, setPremium] = useState(false);

  //side effects
  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Box sx={{ textAlign: "center", pt: 9 }}>
      {premium ? (
        <Fade in={premium} timeout={{ enter: 3000 }}>
          <div style={{ margin: "auto", marginTop: "-30px", width: "100%", maxWidth: "300px", textAlign: "center" }}>
            <img width="95%" style={{ marginBottom: "10px", opacity: "0.8", borderRadius: "5px" }} src={premiumFeature} alt="premium" />
            <Typography
              onClick={() => {
                navigate("/songs-library");
              }}
              className="white-text"
              id="how-it-works"
              align="center"
              variant="body1"
              component="p"
            >
              Back to library?
            </Typography>
          </div>
        </Fade>
      ) : (
        <>
          <Box sx={{ mt: 8, mb: 7 }}>
            {" "}
            <Fade in={fade} timeout={{ enter: 2000 }} mountOnEnter unmountOnExit>
              <Typography className="ornament" id="home-page-quote" align="center" variant="body2" component="p" fontSize="25px">
                Buy premium to get this feature.
              </Typography>
            </Fade>
          </Box>

          <Fade in={fade} timeout={{ enter: 2500 }} mountOnEnter unmountOnExit>
            <Box>
              <Button
                onClick={() => {
                  setPremium(true);
                }}
                sx={{ mb: 1 }}
                size="large"
                disableElevation
                variant="contained"
              >
                Buy premium for 9.99$
              </Button>
              <br></br>
              <Divider>
                <span className="ornament white-text">or</span>
              </Divider>
              <Button
                onClick={() => {
                  navigate("/songs-library");
                }}
                sx={{ mt: 1 }}
                size="large"
                disableElevation
                variant="contained"
              >
                go back to library
              </Button>
            </Box>
          </Fade>
        </>
      )}
    </Box>
  );
}

export default MyStats;
