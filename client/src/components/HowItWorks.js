import React, { useState, useEffect } from "react";
import { Box, Typography, Fade } from "@mui/material";
import Article from "./Article";
import { useNavigate } from "react-router-dom";
import { getSomething, methods } from "../helpers";
import logo from "../assets/images/logo.svg";

function HowItWorks() {
  //local state
  const [fade, setFade] = useState(false);
  const [articles, setArticles] = useState([]);

  //helpers
  const { get } = methods;
  const navigate = useNavigate();

  //side effects
  useEffect(() => {
    setFade(true);
    getSomething(get, "/articles/articleTexts.json", setArticles);
    // eslint-disable-next-line
  }, []);

  return (
    <Box className="HowItWorks" sx={{ overflow: "hidden", textAlign: "center", pt: 4, pb: 2 }}>
      <Fade in={fade} timeout={{ enter: 2000 }} mountOnEnter unmountOnExit>
        <Box
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          <img src={logo} width="250px" />
        </Box>
      </Fade>

      {articles &&
        articles.map((article, i) => {
          return <Article article={article} key={i} />;
        })}

      <Fade in={fade} timeout={{ enter: 2000 }} mountOnEnter unmountOnExit>
        <Typography
          variant="body2"
          onClick={() => {
            navigate("/");
          }}
          className="link white-text"
        >
          Go home
        </Typography>
      </Fade>
    </Box>
  );
}

export default HowItWorks;
