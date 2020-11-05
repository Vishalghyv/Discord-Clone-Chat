import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif
} from "@material-ui/icons";
import React from "react";

import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircle fontSize="Large" />
        <form>
          <input placeholder={"Message #Test Chanel"} />
          <button type="submit" className="chat__inputButton">
            Send Message{" "}
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize="Large" />
          <Gif fontSize="Large" />
          <EmojiEmotions fontSize="Large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
