import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home.jsx/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { useContext } from "react";
import { themeContext } from "./Context";

function App() {
  // background: ;
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // #374E59
  return (
    <div
      className="app"
      style={{
        background: darkMode ? "#374E59" : "#e6f1ff",
        color: darkMode ? "#e6f1ff" : "#374E59",
      }}
    >
      <div className="container">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
