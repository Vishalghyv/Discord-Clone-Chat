import React from "react";
import "./Message.css";

import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          hmmm
          <span className="message__timeStamp">Timestamp</span>
        </h4>
        <p>This is the message</p>
      </div>
    </div>
  );
}

export default Message;
