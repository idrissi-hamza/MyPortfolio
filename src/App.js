import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home.jsx/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About/>
      <Portfolio />
      <Contact/>
    </div>
  );
}

export default App;
