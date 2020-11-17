import {
  AddCircle,
  CardGiftcard,
  EmojiEmotions,
  Gif
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

import "./Chat.css";
import ChatHeader from "./ChatHeader";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function Default({ messageLength, channelName, userName }) {
  if (messageLength !== 0) {
    return null;
  } else {
    if (channelName === null) {
      return (
        <div className="chat__welcome">
          Welcome {userName}, to Chat{" "}
          <span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
            🎉🎉
          </span>
          <div className="chat__welcomeDetail">
            Click on any channel to start chatting regarding that topic
            <br />
            Made by Vishal Chaudhary
            <br />
            Code can be found on -{" "}
            <a href="https://github.com/Vishalghyv/Cloned">
              https://github.com/Vishalghyv/Cloned
            </a>
          </div>
        </div>
      );
    }
    return (
      <div className="chat__empty">
        Welcome to {channelName},<br />
        Send a message to start the conversation
      </div>
    );
  }
}

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState(null);
  const [messages, setMessages] = useState([]);
  const [emoji, setEmoji] = useState(false);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  const pickEmoji = () => {
    setEmoji(!emoji);
  };

  const onEmojiClick = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);

    setInput(input + emoji);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user
    });
    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <Default
        messageLength={messages.length}
        channelName={channelName}
        userName={user.displayName}
      />
      <div className="chat__messages">
        {messages.map((message) => (
          <Message
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>
      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder={`Message #${channelName}`}
          />
          <button
            type="submit"
            className="chat__inputButton"
            disabled={!channelId}
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcard fontSize="large" />
          <Gif fontSize="large" />
          <EmojiEmotions fontSize="large" onClick={pickEmoji} />
        </div>
      </div>
      {emoji ? (
        <div className="emojiPicker">
          <Picker onSelect={onEmojiClick} />
        </div>
      ) : null}
    </div>
  );
}

export default Chat;
