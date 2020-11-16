import React, { useState, useEffect } from "react";
import "./SideBar.css";
import ExpnadMore from "@material-ui/icons/ExpandMore";
import Add from "@material-ui/icons/Add";

import SideBarChannel from "./SideBarChannel";
import db, { auth } from "./firebase";
import {
  SignalCellularAlt,
  Call,
  InfoOutlined,
  Mic,
  Headset,
  Settings
} from "@material-ui/icons";

import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function SideBar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  const handleAddChannel = () => {
    const channelName = prompt("Enter new Channel");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName
      });
    }
  };

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data()
        }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>{user.displayName}</h2>
        <ExpnadMore />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpnadMore />
            <h4>Text Channels</h4>
          </div>

          <Add onClick={handleAddChannel} className="sidebar__addChannels" />
        </div>
        <div className="sidebar__channelsList">
          {channels.map(({ id, channel }) => (
            <SideBarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voiceIcon" fontSize="large" />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
