import React from "react";
import "./Home.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import Circles from "../../components/Navbar/Circles";

const Home = () => {
  let navigate = useNavigate();


  return (
    <div className="home ">
      <div className="container wrapper ">
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
      <Circles />
    </div>
  );
};

export default Home;
