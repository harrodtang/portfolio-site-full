import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import "./Profile.css";

function Profile() {
  const [typeEffect] = useTypewriter({
    words: [
      "Full stack developer 🧱",
      "DevOps engineer ☁️",
      "React ⚛️",
      "Flask (Python) 🐍",
      "SpringBoot (Java) ☕️",
      "Gin (Golang) 🍹",
      "Docker 🐋",
      "Kubernetes 🛳️",
      "CI/CD automation 🔁",
      "... and more 😀",
    ],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Harrod</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>&nbsp;{typeEffect}</h1>
              <span className="profile-role-description">
                Crafting robust applications and scalable deployments.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/harrod-tang"
              target="_blank"
              rel="noopener noreferrer"
              className="btn option-btn"
            >
              LinkedIn
            </Button>

            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              href="https://github.com/harrodtang"
              target="_blank"
              rel="noopener noreferrer"
              className="btn option-btn github-btn"
            >
              GitHub
            </Button>

            <Button
              variant="contained"
              href="harrod-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn option-btn resume-btn"
            >
              Resume
            </Button>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
