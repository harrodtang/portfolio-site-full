import React from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";

import ProjectDisplay from "./ProjectDisplay";
import personalSiteVideo from "../../assets/Projects/portfolio-site.mov";
import tiktokPetsVideo from "../../assets/Projects/tiktok-pets.mov";
import seleniumLogo from "../../assets/Projects/selenium-python.png";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

import "./Projects.css";

function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadein.subscribe(
    fadeInScreenHandler
  );

  const personalSiteDescriptions = [
    "Website built using React to display some of my personal projects.",
    "Responsive to multiple screen sizes.",
    "Includes the implementation of a node server to handle requests from the frontend.",
  ];

  const tiktokRankerDescriptions = [
    "Users upload TikTok videos via POST requests to the Node server.",
    "The app then presents users with pairs of videos and prompts them to select their preference between the two.",
    "Stores video and preference information in two sqlite3 db's.",
    "Leverages the PageRank module to determine the most preferred video.",
  ];

  const symptomSurveyAutomationDescriptions = [
    "Developed to learn more about python automation and web scraping.",
    "Automates filling out UC Davis' COVID symptom survey.",
    "A GUI prompts the user for their login info and whether or not they are experiencing any symptoms.",
    "If no, it automates filling out the form. Exits if yes.",
    "Reduces the time to fill out the survey by over 50%.",
  ];

  return (
    <div className="projects-container fade-in" id={props.id || ""}>
      <ScreenHeading
        className="projects-heading"
        title={"Projects"}
        subHeading={"Some of my personal projects"}
      />

      <OwlCarousel className="owl-theme" loop items={1} nav>
        <ProjectDisplay
          className="project-display"
          url={personalSiteVideo}
          title={"Personal Site"}
          tools={"ReactJS, HTML, CSS, NodeJS - Express"}
          descriptions={personalSiteDescriptions}
        />
        <ProjectDisplay
          className="project-display"
          url={tiktokPetsVideo}
          title={"TikTok Video Ranker"}
          tools={"JS, HTML, CSS, NodeJS - Express, SQL"}
          descriptions={tiktokRankerDescriptions}
        />
        <ProjectDisplay
          className="project-display"
          url={seleniumLogo}
          title={"Symptom Survey Automation"}
          tools={"Python - selenium, webdriver-manager, tkinter"}
          descriptions={symptomSurveyAutomationDescriptions}
          type="image"
        />
      </OwlCarousel>
    </div>
  );
}

export default Projects;
