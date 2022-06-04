import React, { useState } from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Circles from "../../components/Navbar/Circles";
import { useContext } from "react";
import { globalContext } from "../../Context";
import AnimatedLetters from "../../components/AnimatedLetters";

const Home = () => {
  let navigate = useNavigate();
  const context = useContext(globalContext);
  const { open } = context.state;
  const [letterClass, setLetterClass] = useState("text-animate");
  // const introArray = [
  //   "H",
  //   "i,",
  //   "M",
  //   "y",
  //   " ",
  //   "n",
  //   "a",
  //   "m",
  //   "e",
  //   " ",
  //   "i",
  //   "s",
  //   ":",
  // ];
  const nameArray = [
    "H",
    "a",
    "m",
    "z",
    "a",
    " ",
    "A",
    ".",
    "I",
    "d",
    "r",
    "i",
    "s",
    "s",
    "i",
  ];
  const jobArray = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "e",
    "n",
    "d",
    " ",
    "d",
    "e",
    "v",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  return (
    <div
      className={`home ${open ? "background" : ""}`}
      onClick={() => context.dispatch({ type: "close" })}
    >
      <div className=" home-container wrapper ">
        <p>Hi, my name is :</p>
        <h1>
          {/* <span>Hamza A.Idrissi</span> */}
          <AnimatedLetters
            letterClass="text-animate"
            strArray={nameArray}
            idx={10}
          />
          <br />
          <span className={`${letterClass} _24`}>I'</span>
          <span className={`${letterClass} _25`}>m</span>
          &nbsp;
          <span className={`${letterClass} _26`}>a</span>
          &nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={27}
          />
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
