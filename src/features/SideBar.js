import React from "react";
import "./SideBar.css";
import ExpnadMore from "@material-ui/icons/ExpandMore";
import Add from "@material-ui/icons/Add";

import SideBarChannel from "./SideBarChannel";

import {
  SignalCellularAlt,
  Call,
  InfoOutlined,
  Mic,
  Headset,
  Settings
} from "@material-ui/icons";

import { Avatar } from "@material-ui/core";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>Hellsdso</h2>
        <ExpnadMore />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpnadMore />
            <h4>Text Channels</h4>
          </div>

          <Add className="sidebar__addChannels" />
        </div>
        <div className="sidebar__channelsList">
          <SideBarChannel />
          <SideBarChannel />
          <SideBarChannel />
          <SideBarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voiceIcon" fontSize="Large" />
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
        <Avatar />
        <div className="sidebar__profileInfo">
          <h3>Name</h3>
          <p>Username</p>
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
