import React, { useState } from "react";
import "./Message.css";

import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  ClickAwayListener,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    position: "absolute",
    zIndex: 1,
    marginLeft: "60px"
  },
  media: {
    height: 170
  }
});

function Message({ message, timestamp, user }) {
  const classes = useStyles();
  const [profile, setProfile] = useState(false);
  const openProfile = () => {
    setProfile(!profile);
  };
  return (
    <div className="message">
      <Avatar
        src={user.photo}
        onClick={openProfile}
        style={{ cursor: "pointer" }}
      />
      {profile ? (
        <ClickAwayListener onClickAway={openProfile}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={user.photo}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {user.displayName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Email: {user.email}
                  <br />
                  Username: {user.uid.substring(0, 5)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Message
              </Button>
            </CardActions>
          </Card>
        </ClickAwayListener>
      ) : (
        <></>
      )}
      <div className="message__info">
        <h4>
          <span onClick={openProfile} style={{ cursor: "pointer" }}>
            {user.displayName}
          </span>
          <span className="message__timeStamp">
            {new Date(timestamp ? timestamp.toDate() : "").toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
