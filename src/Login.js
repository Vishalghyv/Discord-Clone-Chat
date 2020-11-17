import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import google from "./siginInGoogle.png";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="loginLeft">
        WELCOME
        <br />
        to
        <br />
        <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
          CHAT 🎉🎉
        </span>
      </div>
      <div className="loginRight">
        To start Chatting Login with Gmail
        {/* <div className="login__logo">Image</div> */}
        <Button onClick={signIn} className="loginSignIn">
          <img src={google} alt="" width="100%" height="100%" />
        </Button>
      </div>
    </div>
  );
}

export default Login;
