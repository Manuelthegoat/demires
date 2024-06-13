import logo from "./logo.svg";
import "./App.css";

import BasicExample from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import IsiEwu from "./Components/IsiEwu";
import Location from "./Components/Location";
import Events from "./Components/Events";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BasicExample />
      <Hero />
      <About />
      <IsiEwu />
      <Location />
      <Events />
      <Footer />
    </>
  );
}

export default App;
