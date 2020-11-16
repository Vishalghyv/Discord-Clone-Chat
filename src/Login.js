import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="loginPanel">
        Login
        <div className="login__logo">Image</div>
        <Button onClick={signIn} className="loginSignIn">
          Sign IN
        </Button>
      </div>
    </div>
  );
}

export default Login;
