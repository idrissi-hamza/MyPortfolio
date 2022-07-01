import React, { useState } from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Circles from "../../components/Navbar/Circles";
import { useContext } from "react";
import { globalContext } from "../../Context";
import AnimatedLetters from "../../components/AnimatedLetters";
import { useEffect } from "react";

const Home = () => {
  let navigate = useNavigate();
  const context = useContext(globalContext);
  const { open } = context.state;
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`home ${open ? "background" : ""}` }
      id="/"
      onClick={() => context.dispatch({ type: "close" })}
    >
      <div className="">
        <p>Hi, my name is :</p>
        <h1>
          {/* <span>Hamza A.Idrissi</span> */}
          <div >
            <AnimatedLetters
              letterClass={`${letterClass} name`}
              str="Hamza"
              idx={2}
            />
          </div>
          <div>
            <AnimatedLetters
              letterClass={`${letterClass} name`}
              str="  A.Idrissi"
              idx={6}
            />
          </div>
          <br />
          <span className={`${letterClass} _16`}>I'</span>
          <span className={`${letterClass} _17`}>m</span>
          &nbsp;
          <span className={`${letterClass} _18`}>a</span>
          &nbsp;
          <div>
            <AnimatedLetters
              letterClass={`${letterClass} `}
              str="Frontend"
              idx={19}
            />
          </div>
          <div>
            <AnimatedLetters
              letterClass={`${letterClass} `}
              str="  developer"
              idx={26}
            />
          </div>
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
      {/* <Circles /> */}
    </div>
  );
};

export default Home;
