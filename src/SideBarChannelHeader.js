import React from "react";
import ExpnadMore from "@material-ui/icons/ExpandMore";
import { Add } from "@material-ui/icons";
import db from "./firebase";

function SideBarChannelHeader() {
  const handleAddChannel = () => {
    const channelName = prompt("Add new Channel", "Channel Name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName
      });
    }
  };
  return (
    <div className="sidebar__channelsHeader">
      <div className="sidebar__header">
        <ExpnadMore />
        <h4>Channels</h4>
      </div>

      <Add onClick={handleAddChannel} className="sidebar__addChannels" />
    </div>
  );
}

export default SideBarChannelHeader;
