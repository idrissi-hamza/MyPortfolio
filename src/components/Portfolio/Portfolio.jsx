import React from "react";
import "./Portfolio.scss";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";
const Portfolio = () => {
  return (
    <div className="portfolio wrapper">
      <h1 className="heading">Some Things I’ve Built</h1>
      <ul className="portfolio--projects">
        {projects.map((project,i) => (
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
