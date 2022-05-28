import React from "react";
import "./Home.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { themeContext } from "../../Context";

const Home = () => {
  let navigate = useNavigate();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="home ">
      <div className="container">
        <p>Hi, my name is :</p>
        <h1>
          <span>Hamza A.Idrissi</span>
          <br />
          I'm a Frontend developer
        </h1>
        <h3>
          I build (and occasionally) design exceptional digital experiences.
        </h3>

        {/* <Link to="/contact" className="flat-button"> */}
        <Button
          onClick={() => navigate("/contact")}
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
          Contact me
        </Button>
        {/* </Link> */}
      </div>
      <div className="circles">
        {/* style={{
        background: darkMode ? "#374E59" : "#e6f1ff",
        color: darkMode ? "#e6f1ff" : "#374E59",
      }} */}
        <div
          style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(10, 24, 46, 0.1)" }}
        ></div>
        <div
          style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(10, 24, 46, 0.2)" }}
        ></div>
        <div
          style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(10, 24, 46, 0.1)" }}
        ></div>
        <div
          style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(10, 24, 46, 0.1)" }}
        ></div>
        <div
          style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(10, 24, 46, 0.05)" }}
        ></div>
        <div
          style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(10, 24, 46, 0.25)" }}
        ></div>
        <div
          style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(10, 24, 46, 0.15)" }}
        ></div>
        <div
          style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(10, 24, 46, 0.15)" }}
        ></div>
        <div
          style={{ backgroundColor: darkMode ? "rgba(255, 255, 255, 0.25)" : "rgba(10, 24, 46, 0.15)" }}
        ></div>
       
        
      </div>
    </div>
  );
};

export default Home;
