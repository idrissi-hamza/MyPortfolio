import React from "react";
import "./Navbar.scss";
import Button from "@mui/material/Button";
import Toggle from "./Toggle";
import { useContext } from "react";
import { globalContext } from "../../Context";
// import { NavLink } from "react-router-dom";
import { MenuButton } from "./MenuButton";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

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
      className="navbar "
      style={{
        background: darkMode
          ? "hsla(199, 24%, 28%, 0.9)"
          : "hsla(214, 100%, 95%, 0.9)",
        color: darkMode ? "#e6f1ff" : "#374E59",
      }}
    >
      <MenuButton />
      {/* left */}

      <div className="navbar-container">
        <div className={`navbar__left ${open ? "background" : ""}`}>
          <span className="navbar__logo">{"<H/A>"}</span>
          <Toggle />
        </div>

{/* big screen navbar */}

        {!open && (
          <nav className={`navbar__right  navbar-lg `} >
            <ul className="navbar__list">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.id}
                    // className={({ isActive }) => (isActive ? "active" : "")}
                    activeClass="active"
                    smooth
                    spy
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* small screen navbar */}
      {open && (
        <nav className={`navbar__right navbar-sm`}  style={{
          background: darkMode
            ? "hsla(199, 24%, 28%, 0.9)"
            : "hsla(214, 100%, 95%, 0.9)",
          color: darkMode ? "#e6f1ff" : "#374E59",
        }}>
          <ul className="navbar__list">
            {links.map((link, i) => (
              <li key={i} onClick={() => context.dispatch({ type: "close" })}>
                <Link to={link.id} activeClass="active" smooth spy>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
