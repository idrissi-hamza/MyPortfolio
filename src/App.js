// import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { useContext } from "react";
import { globalContext } from "./Context";
import Circles from "./components/Navbar/Circles";

function App() {
  // background: ;
  const context = useContext(globalContext);
  const { darkMode, open } = context.state;
  const clickHandler = () => {
    context.dispatch({ type: "close" });
  };

  return (
    <div
      className="app  "
      style={{
        background: darkMode ? "#374E59" : "#e6f1ff",
        color: darkMode ? "#e6f1ff" : "#374E59",
      }}
    >
      <Navbar />
      <div className={`wrapper container $`}>
        <div className={` ${open ? "background" : ""}`} onClick={clickHandler}>
          <Home />
          <About />
          <Portfolio />
          <Contact />
          <Circles />
        </div>
      </div>
    </div>
  );
}

export default App;
