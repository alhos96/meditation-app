import { useState, useEffect } from "react";
import "./assets/styles/App.css";
import { Container } from "@mui/material";
import { Navbar, Login, Register, Home, HowItWorks, Songs, AudioPlayer, ChangePassword, MyProfile, Profile, MyStats } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const loggedOut = useSelector((state) => state.users.loggedOut);
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  useEffect(() => {
    loggedIn && setToken(sessionStorage.getItem("token"));
  }, [loggedIn]);
  useEffect(() => {
    loggedOut && setToken(null);
  }, [loggedOut]);

  return (
    <Container className="App">
      <BrowserRouter>
        {token && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route
            path="/songs-library"
            element={
              <PrivateRoute>
                <Songs />
              </PrivateRoute>
            }
          />
          <Route
            path="/songs/play/:id"
            element={
              <PrivateRoute>
                <AudioPlayer />
              </PrivateRoute>
            }
          />
          <Route
            path="/change-password"
            element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-profile"
            element={
              <PrivateRoute>
                <MyProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/my-stats"
            element={
              <PrivateRoute>
                <MyStats />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
