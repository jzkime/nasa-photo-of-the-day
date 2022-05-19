import React from "react";
import "./App.css";
import APOD from './components/APOD'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <div className="header-container">
            <a href="https://api.nasa.gov/" rel="noreferrer" target="_blank"><h1 className="title">Astonomy Picture of the Day</h1></a>
        </div>
      <APOD />
      <Footer />
    </div>
  );
}

export default App;
