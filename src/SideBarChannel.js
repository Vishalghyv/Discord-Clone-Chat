import React, { useState } from "react";
import { DeleteOutline } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import "./SideBarChannel.css";
import db from "./firebase";

function SideBarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  const [didMount, setDidMount] = useState(false);

  const deleteChannel = () => {
    if (channelName) {
      db.collection("channels")
        .where("channelName", "==", channelName)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
          setDidMount(true);
        })
        .catch((err) => {
          console.log(
            "Channel not found or could be deleted due to error",
            err
          );
        });
    }
  };

  if (didMount) {
    return null;
  }

  return (
    <div
      className="sidebarChannel"
      onClick={() => {
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName
          })
        );
      }}
    >
      <h4>
        <span className="sidebarChannel__content">
          <span className="sidebarChannel__hash">#</span>
          {channelName}
        </span>
        <DeleteOutline fontSize="small" onClick={deleteChannel} />
      </h4>
    </div>
  );
}

export default SideBarChannel;
