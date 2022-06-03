import React from "react";
import "./Circles.scss"
import { useContext } from "react";
import { globalContext } from "../../Context";

const Circles = () => {
  const context = useContext(globalContext);
  const darkMode = context.state.darkMode;

  return (
    <div className="circles">
      <div
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(10, 24, 46, 0.1)",
        }}
      ></div>
      <div
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.2)"
            : "rgba(10, 24, 46, 0.2)",
        }}
      ></div>
      <div
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(10, 24, 46, 0.1)",
        }}
      ></div>
      <div
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(10, 24, 46, 0.1)",
        }}
      ></div>
      <div
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.3)"
            : "rgba(10, 24, 46, 0.05)",
        }}
      ></div>
      <div
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(10, 24, 46, 0.25)",
        }}
      ></div>
      <div
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.25)"
            : "rgba(10, 24, 46, 0.15)",
        }}
      ></div>
      <div
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.25)"
            : "rgba(10, 24, 46, 0.15)",
        }}
      ></div>
      <div
        style={{
          backgroundColor: darkMode
            ? "rgba(255, 255, 255, 0.25)"
            : "rgba(10, 24, 46, 0.15)",
        }}
      ></div>
    </div>
  );
};

export default Circles;
