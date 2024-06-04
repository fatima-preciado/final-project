import React from "react";
import { useParams } from "react-router-dom";
import Project from "./Project";

const ProjectDetails = ({ data }) => {
  const { projectId } = useParams();
  const projectIndex = parseInt(projectId);
  const project = data[projectIndex];

  if (!project) {
    return <div>Project not found</div>;
  }

  const totalProjects = data.length;

  return (
    <div>
      <Project
        project={project}
        totalProjects={totalProjects}
        currentProjectIndex={projectIndex}
      />
    </div>
  );
};

export default ProjectDetails;
