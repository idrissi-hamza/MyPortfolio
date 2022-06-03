import React, { useContext } from "react";
import "./Navbar.scss";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { globalContext } from "../../Context";

const Toggle = () => {
  const context = useContext(globalContext);
  const darkMode = context.state.darkMode;
  const handleClick = () => {
    // debugger
    context.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />

      <div
        className="toggle__button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
