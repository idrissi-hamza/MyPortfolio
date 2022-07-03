import React from "react";
import ArchiveCard from "./ArchiveCard";
import { projectsData } from "./projectsData";
import "./Archived.scss"

const Archived = () => {
 
  return (
    <div className="archived wrapper ">
      <h1 className="archived--title ">Other Noteworthy Projects</h1>
      <ul className="archived--projects">
        {projectsData.slice(3).map((project,i) => (
        <li className="archived--project" key={i}>
         <ArchiveCard project={project}/>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Archived;
