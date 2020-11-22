import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    // Authentication State Changed.
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //User logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName
          })
        );
      } else {
        //User logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="App">
      {user ? (
        <div className="App">
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
