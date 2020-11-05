import React from "react";
import "./App.css";
import SideBar from "./features/SideBar";
import Chat from "./features/Chat";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./features/Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? (
        <div>
          <SideBar />
          <Chat />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
