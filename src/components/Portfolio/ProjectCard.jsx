import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({
  projectImage,
  info1,
  infoImage1,
  info2,
  infoImage2,
}) => {
  return (
    <div class="conainer">
      <div class="card">
        <div>
          <div class="card--image">
            <img src={projectImage} alt="image" />
          </div>
          <div class="card--info info--1">
            <span class="info--text">{info1}</span>
            <div class="info--image">
              <img src={infoImage1} alt="info image 1" />
            </div>
          </div>
          <div class="card--info info--2">
            <span class="info--text">{info2}</span>
            {/* <div class="icon"></div> */}
            <div class="info--image">
              <img src={infoImage2} alt="info image 2" />
            </div>
          </div>
        </div>
        <div>text</div>
      </div>
    </div>
  );
};

export default ProjectCard;
