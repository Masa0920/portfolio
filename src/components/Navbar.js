import React from 'react';
// import Burger from './Burger';
import '../static/css/Navbar.css'
import {useSpring, animated} from 'react-spring'

const Navbar = () => {

   const props = useSpring({
      to: [{opacity: 0}, {opacity: 1}],
      from: {opacity: 1},
      config: {tension: 100},
      delay: 1000,
   })

   return (
      <div >
         <animated.div style={props} id='top' className='futter'>
            勉強きろく
         </animated.div>
      </div>
   )
   }

export default Navbar