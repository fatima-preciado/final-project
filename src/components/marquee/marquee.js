import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./marquee.css";
import projectsData from "../../pages/project/data.json";

function Marquee() {
  const emojis = ["♡", "◁", "◇", "→"];
  const location = useLocation();

  return (
    <div className="container">
      <hr className="hr-margin" />
      {location.pathname === "/final-project" && (
        <Link to="/about">
          <marquee> ABOUT ME ← ABOUT ME</marquee>
        </Link>
      )}

      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <hr className="hr-margin" />
          <Link to={`/projects/${index}`}>
            <marquee>
              {project.title.toUpperCase()} {emojis[index % emojis.length]}{" "}
              {project.title.toUpperCase()}
            </marquee>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Marquee;
