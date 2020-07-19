import React from 'react';
import '../static/css/Burger.css'
import { slide as Menu } from 'react-burger-menu'


const Burger = () => {

   return (
      <Menu right width={'30%'}>
         <a id="home" className="menu-item" href="/">TOP</a>
         <a id="about" className="menu-item" href="/about">Profile</a>
         <a id="contact" className="menu-item" href="/contact">Works</a>
         {/* <a className="menu-item--small" href="">Settings</a> */}
      </Menu>
   )
   }
export default Burger


