import React, {useState} from "react";
import { useSpring, animated } from "react-spring"
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import './static/css/App.css'
import Footer from './components/Footer'
// import GoodCount from './components/GoodCount'
import Burger from './components/Burger'
import AnimesContainer from "./components/Animes";
import Profile from "./components/Profile";
import Musics from "./components/Musics";
import SimpleSlider from "./components/SimpleSlider";

const App = () => {

  const [done, setDone] = useState(undefined);

  setTimeout(() => {setDone(true)}, 3000);

  const props1 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    // delay: 1000,
  })
  const props2 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    delay: 200,
  })
  const props3 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    delay: 400,
  })
  const props4 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    delay: 600,
  })
  const props5 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    delay: 800,
  })
  const props6 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    delay: 1000,
  })
  const props7 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    delay: 1200,
  })
  const props8 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    delay: 1400,
  })
  const props9 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    delay: 1600,
  })
  const props10 = useSpring({
    to: {opacity: 0},
    from: {opacity: 1},
    config: {tension: 100},
    delay: 1800,
  })

  return (
    <div>

        {!done ? (
          <div style={{
          }} className="loading" >
            <h1>
              <animated.span style={props1} >H</animated.span>
              <animated.span style={props2}>e</animated.span>
              <animated.span style={props3}>l</animated.span>
              <animated.span style={props4}>l</animated.span>
              <animated.span style={props5}>o</animated.span>
              <animated.span style={props6} >W</animated.span>
              <animated.span style={props7}>o</animated.span>
              <animated.span style={props8}>r</animated.span>
              <animated.span style={props9}>l</animated.span>
              <animated.span style={props10}>d</animated.span>
            </h1>
          </div>
        ) : (
          <div className="wrapper">
            <div>
              <Burger />
              <Navbar />
              {/* <GoodCount /> */}
              <SimpleSlider/>
              <Profile />
              <div className="worksContainer"><Works /></div>
              <h1 id ='animes' className='animes'>\Anime/</h1>
              <AnimesContainer/>
              <h1  id ='music' className='music'>\Music/</h1>
              <Musics/>
              <Footer />
            </div>
          </div>
        )}

    </div>
  );
};

export default App;
