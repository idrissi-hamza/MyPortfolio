import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-scroll/modules";
import Button from "@mui/material/Button";
import Toggle from "./Toggle";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const links = [
    { label: "Home", id: "/" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];
  const [linkTo, setLinkTo] = useState("");

  return (
    <div
      className="navbar  "
      style={{
        background: darkMode ? "#374E59cc" : "#e6f1ffcc",
        color: darkMode ? "#e6f1ff" : "#374E59",
      }}
    >
      {/* left */}
      <div className="container ">
        <div className="navbar__left">
          {/* <span className="navbar__logo">{"<Hamza/>"}</span> */}
        </div>
        {/* right */}
        <nav className="navbar__right">
          <ul className="navbar__list">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.id}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Button
            sx={{
              
              color: "#e57373",
              borderColor: "#e57373",
              borderWidth: "1.4px",
              ":hover": {
                color: "#e57373bb",
                borderColor: "#e57373bb",
                borderWidth: "1.4px",
                background: "#e5737313",
              },
            }}
            variant="outlined"
          >
            Resume
          </Button>
          <Toggle />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
