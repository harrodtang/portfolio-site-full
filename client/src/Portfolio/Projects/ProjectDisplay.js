import React from "react";
import VideoPlayer from "./VideoPlayer";
import "./ProjectDisplay.css";

const renderProjectDescriptions = (descriptions) => {
  return descriptions.map((value, i) => (
    <div className="description" key={i}>
      <div className="description-blob"></div>
      <span>{value}</span>
    </div>
  ));
};

function ProjectDisplay(props) {
  return (
    <div className="project-display">
      <VideoPlayer
        className="video-player-container"
        url={props.url}
        type={props.type || "video"}
      />
      <div className="project-info">
        <span className="project-title">{props.title}</span>
        <br></br>
        <span className="project-tools">{props.tools}</span>
        <br></br>
        {renderProjectDescriptions(props.descriptions)}
      </div>
    </div>
  );
}

export default ProjectDisplay;
