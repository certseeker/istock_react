import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Stocks from "./Pages/Stocks";
import About from "./Pages/About";

function App() {
  return (
    <div className="overall-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" elements={<Stocks />} />
        <Route path="/About"  elements={<About />} />
      </Routes>

    </div>

  );
}

export default App;

      /* Line 10: I want to ask why this is Routes and not Route, from what we named in in index.js. Seems like it could be a keyword. */

