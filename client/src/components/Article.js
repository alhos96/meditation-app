/* This component is rendered in HowItWorks as one of three articles describing meditation */

import React, { useState, useEffect } from "react";
import { Box, Typography, Fade } from "@mui/material";

function Article({ article }) {
  // local state
  const [fade, setFade] = useState(false);

  //side effects
  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <Box className="text-card" sx={{ mt: 6, mb: 6 }}>
      <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
        <Typography variant="h6" sx={{ mb: 2 }} className="white-text">
          {article.header}
        </Typography>
      </Fade>
      <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
        <Box id="text-wrapp">
          <img src={article.img} width="200px"></img>

          <Typography sx={{ margin: "auto", maxWidth: "302px", mt: 2, mb: 6 }} align="justify" variant="body2">
            {article.main}
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
}

export default Article;
