import React, { useContext, useEffect, useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { globalContext } from "../../Context";
import { Button } from "@mui/material";

const Contact = () => {
  const theme = useContext(globalContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_templateID,
        form.current,
        process.env.REACT_APP_publicKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          // form.reset();
          setEmail("");
          setMessage("");
          setName("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact wrapper" id="contact">
      <div className="contact-form">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <h1 className="contact--title" >Get in Touch</h1>
            {/* <span>Contact me</span> */}
            <p className="contact--text">I’m currently looking for  a new opportunity, Although, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              name="from_email"
              className="user"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
              <Button
                // onClick={() => navigate("/contact")}
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
                type="submit"

              >
                Send
              </Button>
            <span>{done && "Thanks for Contacting me"}</span>
            <div className="blur c-blur1" style={{ background: "black" }}></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
