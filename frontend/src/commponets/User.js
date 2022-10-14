import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import PhoneIcon from "@material-ui/icons/Phone";

const User = ({ callAccepted, callEnded, userVideo, leaveCall, callUser }) => {
  console.log(callAccepted, callEnded, userVideo);
  console.log(callAccepted, callEnded, userVideo);
  console.log(callAccepted, callEnded, userVideo);
  console.log(callAccepted, callEnded, userVideo);
  console.log(callAccepted, callEnded, userVideo);

  return (
    <main>
      <h1 style={{ textAlign: "center", color: "#fff" }}>User calling</h1>
      <div className="container">
        <div className="video-container">
          <div className="video">
            {callAccepted && !callEnded ? (
              <video
                playsInline
                ref={userVideo}
                autoPlay
                style={{ width: "300px" }}
              />
            ) : null}
          </div>
        </div>
        <div className="myId">
          <div className="call-button">
            {callAccepted && !callEnded ? (
              <Button variant="contained" color="secondary" onClick={leaveCall}>
                End Call
              </Button>
            ) : (
              <IconButton color="primary" aria-label="call" onClick={callUser}>
                <PhoneIcon fontSize="large" />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default User;
