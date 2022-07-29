/* import React from 'react'; */
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about";
import Navbar from './components/navbar';
import Pricing from "./components/pricing";
import Home from "./components/home";

import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

/* import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        Hello World!
      </div>
    </>
  );
}

export default App; */