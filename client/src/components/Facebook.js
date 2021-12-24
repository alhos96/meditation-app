import React from "react";
import FacebookLogin from "react-facebook-login";
import { userLogin } from "../store/usersSlice";
import { methods } from "../helpers";
import { useDispatch } from "react-redux";

function Facebook() {
  //helpers
  const dispatch = useDispatch();
  const { post } = methods;

  //functions
  const responseFacebook = (response) => {
    dispatch(userLogin("users/facebook-login", response, post));
  };

  const componentClicked = () => console.log("clicked");

  return (
    <FacebookLogin
      appId="394903815762795"
      buttonStyle={{ height: "42px", borderRadius: "5px", marginTop: "15px", fontWeight: "lighter" }}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
    />
  );
}

export default Facebook;
