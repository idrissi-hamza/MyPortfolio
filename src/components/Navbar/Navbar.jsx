import React from "react";
import './Navbar.scss'
import { Link } from "react-scroll/modules";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* left */}
      <div>
        <span>{"<Hamza/>"}</span>
        <div>toggle</div>
      </div>
      {/* right */}
      <div>
        <ul>
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
        </ul>

        <Link to="contact" spy={true} smooth={true}>
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
