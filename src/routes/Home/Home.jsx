import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Circles from "../../components/Navbar/Circles";
import { useContext } from "react";
import { globalContext } from "../../Context";

const Home = () => {
  let navigate = useNavigate();
  const context = useContext(globalContext);
  const { open } = context.state;
  return (
    <div className={`home ${open ? "background" : ""}`} onClick={() => context.dispatch({ type: "close" })}>
      <div className=" home-container wrapper ">
        <p>Hi, my name is :</p>
        <h1>
          <span>Hamza A.Idrissi</span>
          <br />
          I'm a Frontend developer
        </h1>
        <h3>
          I build (and occasionally) design exceptional digital experiences.
        </h3>

        <Button
          onClick={() => navigate("/contact")}
          sx={{
            zIndex: "10",

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
      </div>
      <Circles />
    </div>
  );
};

export default Home;
