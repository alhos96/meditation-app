import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Divider, Fade, Menu } from "@mui/material";
import Loader from "./Loader";
import { getSomething, methods, windowSizeTracker } from "../helpers";
import Song from "./Song";

function Songs() {
  //global state
  const token = sessionStorage.getItem("token");

  const [fade, setFade] = useState(false);
  const [songs, setSongs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [favourites, setFavourites] = useState([]);
  //on load check screen size, this prevents big menu being rendered on small screen
  const [showCategoriesAsMenu, setShowCategoriesAsMenu] = useState(window.innerWidth > 767 ? true : false);

  const { get } = methods;

  useEffect(() => {
    setFade(true);
    getSomething(get, "/songs/get-songs", setSongs);
    getSomething(get, "/articles/categories.json", setCategories);
    getSomething(get, `/songs/get-favourites`, setFavourites, token);

    // eslint-disable-next-line
  }, []);

  //menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // window size tracker

  window.onresize = () => {
    windowSizeTracker(setShowCategoriesAsMenu);
  };

  return (
    <>
      {songs.length > 0 ? (
        <>
          {categories && !showCategoriesAsMenu ? (
            <div className="action-buttons sticky-button">
              <Button
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ mr: 1.5 }}
              >
                categories
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                {categories.map((category, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{ fontSize: "13px", width: "fit-content", margin: "auto", p: 1 }}
                      onClick={() => {
                        setFilterCategory(category);
                        handleClose();
                      }}
                    >
                      {category}
                    </Typography>
                  );
                })}
              </Menu>
            </div>
          ) : (
            <Box className="categories-wrapp sticky-button">
              {categories.map((category, index) => {
                return (
                  <Typography
                    key={index}
                    className="category small-letter-spacing "
                    onClick={() => {
                      setFilterCategory(category);
                      handleClose();
                    }}
                  >
                    {category}
                  </Typography>
                );
              })}
            </Box>
          )}
          <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
            <Divider id="5-mins" width="20%" textAlign="left">
              5 mins
            </Divider>
          </Fade>
          <Box
            className="Songs"
            sx={{
              zIndex: "-1",
              overflow: "hidden",
              textAlign: "center",
              pt: 3,
              pb: 2,
            }}
          >
            {songs &&
              songs

                // eslint-disable-next-line
                .filter((item) => {
                  if (filterCategory === "all") {
                    return item;
                  } else if (filterCategory === "favourites") {
                    if (favourites.includes(item._id)) {
                      return item;
                    }
                  } else if (item.category.toLowerCase().includes(filterCategory.toLowerCase())) {
                    return item;
                  }
                })
                .map((song, index) => {
                  return song.length === 5 && <Song id={song._id} title={song.title} image={song.img} key={index} />;
                })}
          </Box>
          <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
            <Divider id="5-mins" width="20%" textAlign="left">
              10 mins
            </Divider>
          </Fade>
          <Box
            className="Songs"
            sx={{
              zIndex: "-1",
              overflow: "hidden",
              textAlign: "center",
              pt: 3,
              pb: 2,
            }}
          >
            {songs &&
              songs
                .filter((item) => {
                  if (filterCategory === "all") {
                    return item;
                  } else if (filterCategory === "favourites") {
                    if (favourites.includes(item._id)) {
                      return item;
                    }
                  } else if (item.category.toLowerCase().includes(filterCategory.toLowerCase())) {
                    return item;
                  }
                })
                .map((song, index) => {
                  return song.length === 10 && <Song id={song._id} title={song.title} image={song.img} key={index} />;
                })}
          </Box>
          <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
            <Divider id="5-mins" width="20%" textAlign="left">
              15 mins
            </Divider>
          </Fade>
          <Box
            className="Songs"
            sx={{
              zIndex: "-1",
              overflow: "hidden",
              textAlign: "center",
              pt: 3,
              pb: 2,
            }}
          >
            {songs &&
              songs
                .filter((item) => {
                  if (filterCategory === "all") {
                    return item;
                  } else if (filterCategory === "favourites") {
                    if (favourites.includes(item._id)) {
                      return item;
                    }
                  } else if (item.category.toLowerCase().includes(filterCategory.toLowerCase())) {
                    return item;
                  }
                })
                .map((song, index) => {
                  return song.length === 15 && <Song id={song._id} title={song.title} image={song.img} key={index} />;
                })}
          </Box>
          <Fade in={fade} timeout={{ enter: 1500 }} mountOnEnter unmountOnExit>
            <Divider id="5-mins" width="20%" textAlign="left">
              20 mins
            </Divider>
          </Fade>
          <Box
            className="Songs"
            sx={{
              zIndex: "-1",
              overflow: "hidden",
              textAlign: "center",
              pt: 3,
              pb: 2,
            }}
          >
            {songs &&
              songs
                .filter((item) => {
                  if (filterCategory === "all") {
                    return item;
                  } else if (filterCategory === "favourites") {
                    if (favourites.includes(item._id)) {
                      return item;
                    }
                  } else if (item.category.toLowerCase().includes(filterCategory.toLowerCase())) {
                    return item;
                  }
                })
                .map((song, index) => {
                  return song.length === 20 && <Song id={song._id} title={song.title} image={song.img} key={index} />;
                })}
          </Box>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Songs;
