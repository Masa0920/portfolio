import React from 'react';
import '../static/css/Burger.css'
import { slide as Menu } from 'react-burger-menu'
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles ( () => (
   createStyles({
      "menu": {
         color: "black !important",
         backgroundColor: "red !important",
      }
   })
));


const Burger = () => {
   const classes = useStyles();

   return (
      <Menu className={classes.menu} right width={'30%'}>
         <a id="home" className="menu-item" href="#top">TOP</a>
         <a id="about" className="menu-item" href="#profile">Profile</a>
         <a id="contact" className="menu-item" href="#works">Works</a>
         <a id="contact" className="menu-item" href="#animes">Anime</a>
         <a id="contact" className="menu-item" href="#music">Music</a>
         {/* <a className="menu-item--small" href="">Settings</a> */}
      </Menu>
   )
   }
export default Burger


