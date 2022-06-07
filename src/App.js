// import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { useContext } from "react";
import { globalContext } from "./Context";

function App() {
  // background: ;
  const context = useContext(globalContext);
  const darkMode = context.state.darkMode;
  // #374E59
  return (
    <div
      className="app  "
      style={{
        background: darkMode ? "#374E59" : "#e6f1ff",
        color: darkMode ? "#e6f1ff" : "#374E59",
      }}
    >
      {/* <div className="container"> */}

      <Navbar />
      <div className="wrapper container">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
