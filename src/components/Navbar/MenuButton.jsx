import React from "react";
import { useContext } from "react";
import { globalContext } from "../../Context";
import "./MenuButton.scss";

export const MenuButton = () => {
  const context = useContext(globalContext);
  const { open, darkMode } = context.state;
  const clickHandler = () => {
    context.dispatch({ type: "menu" });
  };
  return (
    <div onClick={clickHandler} className={`menu-btn ${open ? "open" : ""} `}>
      {/* color: darkMode ? "#e6f1ff" : "" */}
      <div className={`menu-btn__burger ${darkMode ? " dark" : ""}`} />
    </div>
  );
};
