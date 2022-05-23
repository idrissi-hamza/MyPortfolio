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

  return (
    <div
      className="app"
      style={{
        background: darkMode ? "#0a192f" : "#e6f1ff",
        color: darkMode ? "#e6f1ff" : "#0a192f",
      }}
    >
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
