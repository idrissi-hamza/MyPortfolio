import React from "react";
import { useContext } from "react";
import { globalContext } from "../../Context";
import "./MenuButton.scss";

export const MenuButton = () => {
  const context = useContext(globalContext);
  const { open } = context.state;
  const clickHandler = () => {
    context.dispatch({ type: "menu" });
  };
  return (
    <div onClick={clickHandler} className={`menu-btn ${open ? "open" : ""}`}>
      <div className="menu-btn__burger"></div>
    </div>
  );
};
