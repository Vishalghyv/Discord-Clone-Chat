import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {};
  return (
    <div className="login">
      Login
      <div className="login__logo">Image</div>
      <Button onClick="signIn">Sign IN </Button>
    </div>
  );
}

export default Login;
