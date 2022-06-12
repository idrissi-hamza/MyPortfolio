import React from "react";
import "./Portfolio.scss";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <div className="portfolio wrapper">
      <h1 className="heading">Some Things I’ve Built</h1>
      <ProjectCard
        projectImage={"./thenext.PNG"}
        info1="good"
        infoImage1={"./tasks.PNG"}
        info2="verygood"
        infoImage2={"./signup.PNG"}
      />
    </div>
  );
};

export default Portfolio;
