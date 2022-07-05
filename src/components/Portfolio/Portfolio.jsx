import React from "react";
import Archived from "./Archived";
import "./Portfolio.scss";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";
const Portfolio = () => {
  return (
    
      <section className="portfolio wrapper" id="portfolio">
        <h1 className="heading">Projects</h1>
        <ul className="portfolio--projects">
          {projectsData.slice(0, 3).map((project, i) => (
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
        <Archived />
      </section>
      );
};

export default Portfolio;
