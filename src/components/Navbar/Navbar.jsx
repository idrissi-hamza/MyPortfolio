import React from "react";
import "./Navbar.scss";
import { Link } from "react-scroll/modules";
import Button from "@mui/material/Button";
import Toggle from "./Toggle";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="navbar"
      style={{
        background: darkMode ? "#0a192fcc" : "#e6f1ffcc",
        color: darkMode ? "#e6f1ff" : "#0a192f",
      }}
    >
      {/* left */}
      <div className="navbar__left">
        <span className="navbar__logo">{"<Hamza/>"}</span>
        <Toggle />
      </div>
      {/* right */}
      <div className="navbar__right">
        <ul className="navbar__list">
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>

          <li>
            <Link to="portfolio" spy={true} smooth={true}>
              Protfolio
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>

        <Button variant="outlined">Resume</Button>
      </div>
    </div>
  );
};

export default Navbar;
