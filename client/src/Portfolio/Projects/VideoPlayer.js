import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";

const VideoPlayer = ({ url, type = "video" }) => {
  if (type === "image") {
    return (
      <div className="video-player-container">
        <img src={url} alt="Displayed content" className="image-content" />
      </div>
    );
  }

  return (
    <div className="video-player-container">
      <ReactPlayer
        url={url}
        playing={true}
        loop={true}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
