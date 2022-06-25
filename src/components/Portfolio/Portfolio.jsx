import React from "react";
import "./Portfolio.scss";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";
const Portfolio = () => {
  return (
    <div className="portfolio wrapper">
      <h1 className="heading">Some Things I’ve Built</h1>
      <ul className="portfolio--projects">
        {projectsData.map((project,i) => (
          <li key={i}>
            <ProjectCard
              projectImage={project.img}
              projectTitle={project.title}
              projectDescription={project.description}
              projectTech={project.tech}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
