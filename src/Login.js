import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import google from "./siginInGoogle.png";
import back from "./back.jpg";
import dark from "./dark.png";
import Typewriter from "typewriter-effect";

// Login Screen.
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error));
  };
  return (
    <div className="login" style={{ backgroundImage: `url(${back})` }}>
      <div className="loginLeft">
        <Typewriter
          options={{
            strings: ["WELCOME TO CHAT"],
            autoStart: true,
            loop: true
          }}
        />
        <div className="dark">
          <img src={dark} alt="" className="darkImage" />
        </div>
      </div>
      <div className="loginRight">
        To start Chatting Login with Gmail
        <Button onClick={signIn} className="loginSignIn">
          <img src={google} alt="" width="100%" height="100%" />
        </Button>
      </div>
    </div>
  );
}

export default Login;
