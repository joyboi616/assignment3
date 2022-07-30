import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Navbar from './components/navbar';
import Home from "./components/home";

import MarvelMoviesList from './components/marvel/marvelMoviesList';
import MarvelMoviesCreate from './components/marvel/marvelMoviesCreate';
import MarvelMoviesEdit from './components/marvel/marvelMoviesEdit';

function App() {
  return(
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/marvelList" element={<MarvelMoviesList />} />
          <Route path="/marvelCreate" element={<MarvelMoviesCreate />} />
          <Route path="/marvelEdit/:id" element={<MarvelMoviesEdit />} />

          {/* <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} /> */}
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