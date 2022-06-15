import React from "react";
import "./ProjectCard.scss";
import { FiGithub ,FiExternalLink} from "react-icons/fi";

const ProjectCard = ({ projectImage }) => {
  return (
    
    <div className="card">
      <div className="card--image">
      <div className="card--title sm">
          <span> Featured Project</span>TheNext
        </div>
        <img src={projectImage} alt="image" />
      </div>
      <div className="card--text">
        <div className="card--title lg">
          <span> Featured Project</span>TheNext
        </div>
        <div className="card--description">
          TheNext is a planner that allows an authenticated user to add his
          tasks and keep track of their progress, with a minimalist UI &
          responsive design that gives a user a nice experience.
          <br /> It's built with React & The styling is done with Tailwindcss.
          Authentication & storage with Firebase.
        </div>
        <div className="card--tech">
          &nbsp; React &nbsp; TailwindCss &nbsp; Firebase
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
