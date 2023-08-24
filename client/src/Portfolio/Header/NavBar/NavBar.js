import React, { useState } from "react";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../../../utils/common";
import ScrollService from "../../../utils/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";

function NavBar() {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showNavbarOptions, setshowNavbarOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(
    updateCurrentScreen
  );

  const getNavBarOptions = () => {
    const getDisplayName = (screenName) => {
      if (screenName === "Header") {
        return "Home";
      } else if (screenName === "AboutMe") {
        return "About Me";
      } else if (screenName === "ContactMe") {
        return "Contact Me";
      } else {
        return "";
      }
    };

    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getNavBarOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{getDisplayName(screen.screen_name) || screen.screen_name}</span>
      </div>
    ));
  };

  const getNavBarOptionsClass = (index) => {
    let classes = "navbar-option ";

    if (index < TOTAL_SCREENS.length - 1) {
      classes += "navbar-option-separator ";
    }

    if (selectedScreen === index) {
      classes += "selected-navbar-option";
    }

    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);

    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setshowNavbarOptions(false);
  };

  return (
    <div>
      <div
        className="navbar-container"
        onClick={() => setshowNavbarOptions(!showNavbarOptions)}
      >
        <div className="navbar-parent">
          <div
            className="navbar-hamburger"
            onClick={() => setshowNavbarOptions(!showNavbarOptions)}
          >
            <FontAwesomeIcon className="navbar-hamburger-bars" icon={faBars} />
          </div>
          <div
            className={
              showNavbarOptions
                ? "navbar-options show-hamburger-options"
                : "navbar-options"
            }
          >
            {getNavBarOptions()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
