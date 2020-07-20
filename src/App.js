import React from "react";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import './static/css/App.css'
import Footer from './components/Footer'
// import GoodCount from './components/GoodCount'
import Burger from './components/Burger'
import AnimesContainer from "./components/Animes";
import Profile from "./components/Profile";
import Musics from "./components/Musics";

const App = () => {
  return (
    <div className="wrapper">
    <div>
      <Burger />
      <Navbar />
      {/* <GoodCount /> */}
      <Profile />
      <div className="worksContainer"><Works /></div>
      <h1 id ='animes' className='animes'>\Anime/</h1>
      <AnimesContainer/>
      <h1  id ='music' className='music'>\Music/</h1>
      <Musics/>
      <Footer />
    </div>
  </div>
  );
};

export default App;
