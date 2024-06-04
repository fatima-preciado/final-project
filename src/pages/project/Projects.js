import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const Projects = ({ data }) => {
  return (
    <div>
      {data.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={`/projects/${index}`}>View Project</Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
