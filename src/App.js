// import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./routes/Portfolio/Portfolio";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import About from "./routes/About/About";
import { useContext } from "react";
import { globalContext } from "./Context";
import { Route, Routes } from "react-router-dom";

function App() {
  // background: ;
  const context = useContext(globalContext);
  const darkMode = context.state.darkMode;
  // #374E59
  return (
    <div
      className="app "
      style={{
        background: darkMode ? "#374E59" : "#e6f1ff",
        color: darkMode ? "#e6f1ff" : "#374E59",
      }}
    >
      {/* <div className="container"> */}
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
