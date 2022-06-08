import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about wrapper">
      <h1 className="heading">About me</h1>
      <div className="about__container">
        <div className="img-container">
          <img src="./profile.jpg" alt="profile" />
        </div>
        <div className="about__text">
          As a Frontend developer, I enjoy bridging the gap between engineering
          and design — combining my technical knowledge with my keen eye for
          design to create scalable and efficient applications while
          providing engaging, pixel-perfect user experiences.
          <br />
          I have a good experience, working as a freelance on various projects.
       
          <br />
          Here are a few technologies I’ve been working with recently:
          <ul className="about__list">
            <li>JavaScript (ES6+) </li>
            <li>TypeScript</li>
            <li>React</li>
            <li>GraphQl</li>
            <li>Next.js</li>
            <li>Tailwindcss</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
