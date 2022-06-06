import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about wrapper">
      <div className="img-container">
        <img src="./profile.jpg" alt="profile" />
      </div>
      <div className="about__text">
        I'm a frontend developer with a solid knowledge of the cutting-edge
        technologies used in the web developement.
        <br className="br" />
        I'm able to work independently &
        collaboratively in a team to deliver a great user experience and satisfy
        the needs of my clients.
        <br />
        I have a good design eye & I'm a tireless seeker of the 'why' of things,
        and finding both a good and efficient way of solving problems, with a
        meticulous attention to details.
        <br />
        Here are a few technologies I’ve been working with recently:
      </div>
    </div>
  );
};

export default About;
