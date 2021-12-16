import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Images from "./images.js";
import "./page2.css";


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
