import React from "react";
import "./Portfolio.scss";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <div className="portfolio wrapper">
      <h1 className="heading">Some Things I’ve Built</h1>
      <ul className="portfolio--projects">
        <li>
          <ProjectCard projectImage={"./thenext.PNG"} />
        </li>
        <li>
          <ProjectCard projectImage={"./thenext.PNG"} />
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
