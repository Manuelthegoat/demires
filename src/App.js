import logo from "./logo.svg";
import "./App.css";

import BasicExample from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import IsiEwu from "./Components/IsiEwu";
import Location from "./Components/Location";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>
      <BasicExample />
      <Hero />
      <About />
      <IsiEwu />
      <Location />
      <Events />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
