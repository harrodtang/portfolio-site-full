import React from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import "./AboutMe.css";

function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadein.subscribe(
    fadeInScreenHandler
  );

  const SCREEN_CONSTANTS = {
    descriptionP1:
      "Hey I'm Harrod - I'm currently working as a software engineer. " +
      "On my current team, I've been involved in the complete end-to-end development lifecycle of applications. " +
      "This includes architecting the application, constructing it with a focus on reliability and robustness, and  successfully deploying it at scale.",
    descriptionP2:
      "What excites me the most about working as a software engineer is the ability to turn ideas into practical solutions. " +
      "I find the process of conceptualizing a problem, designing a solution for it, and bringing this solution to fruition extremely fulfilling. " +
      "The constant learning and sense of achievement that comes with tackling these challenges head on keeps me motivated and enthusiastic about the work that I get to do.",
    personalHighlights: {
      bullets: [
        "Golfing",
        "Working out",
        "Travelling (Here's me in Lisbon 😀)",
        "Trying new food places",
        "Fostering a dog",
        "Volunteering as a teacher for my local nonprofit",
      ],
      heading: "In my free time, you'll probably find me: ",
    },
  };

  const renderPersonalHighlights = () => {
    return SCREEN_CONSTANTS.personalHighlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading
          title={"About Me"}
          subHeading={
            "Tech enthusiast with a passion for all things active and outdoors"
          }
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.descriptionP1}
              <br></br>
              <br></br>
              {SCREEN_CONSTANTS.descriptionP2}
            </span>

            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.personalHighlights.heading}</span>
              </div>
              {renderPersonalHighlights()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
