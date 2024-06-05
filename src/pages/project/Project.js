import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import "./projectNavigation.css";

const Project = ({ project, totalProjects, currentProjectIndex }) => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const toggleFeature = (feature) => {
    setExpandedFeature(expandedFeature === feature ? null : feature);
  };

  const renderFeature = (title, content) => (
    <div className={`feature ${title.toLowerCase()}`} key={title}>
      <h3 onClick={() => toggleFeature(title)}>
        {title} {expandedFeature === title ? "▲" : "▼"}
      </h3>
      {expandedFeature === title && <p>{content}</p>}
    </div>
  );

  return (
    <div className="map">
      <h1>{project.title}</h1>
      <div className="container-p">
        <div className="column">
          <div className="disc">
            <p>{project.description}</p>
          </div>

          <div className="role">
            <h3>ROLE</h3>
            <p>{project.role}</p>
          </div>

          <div className="respons">
            <h3>RESPONSIBILITIES</h3>
            <p>{project.responsibilities}</p>
          </div>

          <div className="link">
            <h3>LINK</h3>
            <a href={project.link} target="_blank" rel="noreferrer">
              GitHub Link
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          height: "auto",
          paddingBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#000",
            textAlign: "center",
            padding: "30px",
            fontSize: "40px",
            textTransform: "uppercase",
          }}
        >
          Demo
        </h2>
        <div className="content">
          <div className="features">
            {project.features.map((feature) =>
              renderFeature(feature.title, feature.content)
            )}
          </div>

          <div className="demo">
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={project.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          textTransform: "uppercase",
        }}
      >
        Future
      </h2>
      <div className="Futures">
        {project.futurePlans.map((plan) => (
          <div key={plan.title} className="future-plan">
            <h3>{plan.title}</h3>
            <p>{plan.content}</p>
          </div>
        ))}
      </div>

      <div className="project-navigation">
        <div className="navigation-arrows">
          <div className="left">
            <Link
              to={
                currentProjectIndex > 0
                  ? `/projects/${currentProjectIndex - 1}`
                  : "#"
              }
              className={currentProjectIndex === 0 ? "disabled" : ""}
            >
              ←
            </Link>
          </div>

          <div className="middle">
            <Link to="/final-project">↑</Link>
          </div>

          <div className="right">
            <Link
              to={
                currentProjectIndex < totalProjects - 1
                  ? `/projects/${currentProjectIndex + 1}`
                  : "#"
              }
              className={
                currentProjectIndex === totalProjects - 1 ? "disabled" : ""
              }
            >
              →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
