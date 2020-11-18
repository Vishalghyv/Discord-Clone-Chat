import React from "react";
import "./Profile.css";

export default function Profile({ user }) {
  console.log(user);
  // return null;
  return (
    <div className="profile">
      <img src={user.photo} alt="" width="200px" height="200px" />
      <div className="profile__detail">
        <h2> Display Name: {user.displayName}</h2>
      </div>
      <div className="profile__detail">
        <h2> Email: {user.email}</h2>
      </div>
      <div className="profile__detail">
        <h2> Uid: {user.uid.substring(0, 5)}</h2>
      </div>
    </div>
  );
}
