import React from "react";
import "./Navbar.scss";
import Button from "@mui/material/Button";
// import Toggle from "./Toggle";
import { useContext } from "react";
import { globalContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { MenuButton } from "./MenuButton";

const Navbar = () => {
  const context = useContext(globalContext);
  const { darkMode, open } = context.state;
  const links = [
    { label: "Home", id: "/" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div
      className="navbar   "
      style={{
        background: darkMode ? "#374E59cc" : "#e6f1ffcc",
        color: darkMode ? "#e6f1ff" : "#374E59",
      }}
    >
      <MenuButton />

      <div className="navbar-container">
        {/* left */}
        <div className="navbar__left">
          <span className="navbar__logo">{"<H/A>"}</span>
          {/* <Toggle /> */}
        </div>

        {/* right */}
        <nav className={`navbar__right  navbar-lg `}>
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

            <Button
              sx={{
                zIndex: "40",

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
              onClick={() => console.log("clicked")}
            >
              Resume
            </Button>
          </ul>
        </nav>
        {open && <nav className={`navbar__right navbar-sm `}>
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

            <Button
              sx={{
                zIndex: "40",

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
              onClick={() => console.log("clicked")}
            >
              Resume
            </Button>
          </ul>
        </nav>}
      </div>
    </div>
  );
};

export default Navbar;
