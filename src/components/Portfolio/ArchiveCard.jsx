import * as React from "react";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { globalContext } from "../../Context";

export default function ArchiveCard({ project }) {
  const context = React.useContext(globalContext);
  const darkMode = context.state.darkMode;
  return (
    <div>
      <article class="card">
        <div class="thumb">
          <img src={project.img} />
        </div>
        <div
          class="infos"
          // style={{
          //   background: darkMode ?  "#e6f1ff": "#374E59",
          // }}
        >
          <h3 className="stacks">
            {project.tech.map((tech, i) => (
              <span className={` stack ${tech}`} key={i}>{tech}</span>
            ))}
          </h3>
          <h2 class="title ">
            {project.title}

          </h2>
          <div className="links">
            <FiExternalLink />
            <FiGithub />
          </div>

          <div class="line"></div>
          <p class="txt">
           {project.description}
          </p>
        
        </div>
      </article>
    </div>
  );
}
