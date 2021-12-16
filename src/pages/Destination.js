import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Images from "C:/Users/lenovo/About_us/src/pages/images.js";
import "C:/Users/lenovo/About_us/src/pages/page2.css";
import Wether from "C:/Users/lenovo/About_us/src/pages/wether.js";
import Drahem from "C:/Users/lenovo/About_us/src/pages/drahem.js"
import Jendouba from 'C:/Users/lenovo/About_us/src/pages/Jendouba';
import Haouaria from 'C:/Users/lenovo/About_us/src/pages/Haouaria';
import Zaghouen from 'C:/Users/lenovo/About_us/src/pages/zaghouen';
import Bizerte from 'C:/Users/lenovo/About_us/src/pages/bizerte';
import Nabeul from 'C:/Users/lenovo/About_us/src/pages/nabeul';
import Beja from 'C:/Users/lenovo/About_us/src/pages/beja';
import Tozeur from 'C:/Users/lenovo/About_us/src/pages/Tozeur';
import Tabarka from 'C:/Users/lenovo/About_us/src/pages/tbarka';
import {Link } from 'react-router-dom';

function Destinations () {
    return ( 
      <body style={{backgroundColor:"rgba(245,245,220,0.5)", paddingTop:"0"}}>
      <br/> <br/> <br/><br/>
        <h1 class="dest">Destinations</h1>
      <div className="Page2">
          <div className="container3">
  
         
          <div  className ="images">
          <Images />
          </div> </div>
     </div> 
     <br/> <br/> <br/><br/><br/><br/>
     </body>
  );
};
  
export default Destinations;
