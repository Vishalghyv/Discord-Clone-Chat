import React, { useState, useEffect } from "react";
import "./SideBar.css";

import SideBarChannel from "./SideBarChannel";
import SideBarHeader from "./SideBarHeader";
import SideBarChannelHeader from "./SideBarChannelHeader";
import db from "./firebase";
import {
  SignalCellularAlt,
  Call,
  InfoOutlined,
  Mic,
  Headset,
  Settings
} from "@material-ui/icons";

import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { Avatar } from "@material-ui/core";
function SideBar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  // Getting Channel lists.
  useEffect(() => {
    db.collection("channels")
      .orderBy("channelName", "asc")
      .onSnapshot((snapshot) => {
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
      <SideBarHeader userName={user.displayName} />
      <div className="sidebar__channels">
        <SideBarChannelHeader />
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
        <Avatar src={user.photo} />
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
