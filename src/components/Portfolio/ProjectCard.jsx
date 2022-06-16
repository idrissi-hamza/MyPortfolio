import React from "react";
import "./ProjectCard.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ projectImage, projectTitle, projectDescription,projectTech }) => {
  return (
    <div className="card">
      <div className="card--image">
        <div className="card--title sm">
          <span> Featured Project</span>
          {projectTitle}
        </div>
        <img src={projectImage} alt="image" />
      </div>
      <div className="card--text">
        <div className="card--title lg">
          <span> Featured Project</span>
          {projectTitle}
        </div>
        <div className="card--description">
          {projectDescription.map((paragraph,i) => (
            <div key={i}>{paragraph}</div>
          ))}
        </div>
        <div className="card--tech">
        {projectTech.map((tech,i) => (
            <div key={i}>{tech}</div>
          ))}

        </div>
        <div className="card--links">
          <FiExternalLink />
          <FiGithub />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
