import logo from "./logo.svg";
import "./App.css";
import Routing from "./Routes";
import Footer from "./Components/Footer";
import BasicExample from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="norms">
        <h1>
          NOT AVAILABLE ON THIS DEVICE FOR NOW, <br /> CHECK LATER
        </h1>
      </div>
      <div className="notnorms">
        <BasicExample />
        <Routing />
        <Footer />
      </div>
    </>
  );
}

export default App;
