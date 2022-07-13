import * as React from "react";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { globalContext } from "../../Context";

export default function ArchiveCard({ project }) {
  const context = React.useContext(globalContext);
  // const darkMode = context.state.darkMode;
  return (
    <div>
      <article className="card">
        <div className="thumb">
          <img src={project.img} />
        </div>
        <div className="infos">
          <h3 className="stacks">
            {project.tech.map((tech, i) => (
              <span className={` stack ${tech}`} key={i}>
                {tech}
              </span>
            ))}
          </h3>
          <div className="title-container">
            <h2 className="title ">{project.title} </h2>
            <span>{project.status}</span>
          </div>
          <div className="links">
            <a href={project.link} target="_blank">
              <FiExternalLink />
            </a>
            <a href={project.github} target="_blank">
              <FiGithub />
            </a>
          </div>

          <div className="line"></div>
          <p className="txt">{project.description}</p>
        </div>
      </article>
    </div>
  );
}
