import React from "react";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";
import "./Header.css";

function Header() {
  return (
    <div className="header-container" id="Header-container">
      <NavBar />
      <Profile />
    </div>
  );
}

export default Header;
