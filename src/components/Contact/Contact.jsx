import React, { useContext, useEffect, useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { globalContext } from "../../Context";
import { Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const theme = useContext(globalContext);
  const { darkMode } = theme.state;
  const form = useRef();
  const [values, setValues] = useState({
    email: "",
    message: "",
    name: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(Object.values(values));
    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

console.log(hasEmptyFields)

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
      // toast('🦄 Wow so easy!');
    }

    !hasEmptyFields && emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_templateID,
        form.current,
        process.env.REACT_APP_publicKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          // setDone(true);
          toast.success("Thanks for Contacting me");
          // form.reset();
          setValues({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="contact wrapper" id="contact">
      <div className="contact-form">
      <ToastContainer />
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <h1 className="contact--title">Get in Touch</h1>
            {/* <span>Contact me</span> */}
            <p className="contact--text">
              I’m currently looking for a new opportunity, Although, my inbox is
              always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!
            </p>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              className="user"
              placeholder="Name"
              value={values.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              className="user"
              placeholder="Email"
              value={values.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              value={values.message}
              onChange={handleInputChange}
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
            {/* <span>{done && "Thanks for Contacting me"}</span> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
