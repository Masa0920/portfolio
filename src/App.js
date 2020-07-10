import React from "react";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import './static/css/App.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="worksContainer"><Works /></div>
      <Footer />
    </div>
  );
};

export default App;
