import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './tabarka.css';
import GoogleMaps from './map';
import Wether from './wether'

const Tabarka = () => {
    return ( 
        <div>
       
   
    <div className="top-menue" style={{background:"transparent",marginTop:"86px"}}>
    </div>
        
    <div className="containerx">
      
      <div style={{fontFamily:"cherolina" ,fontSize:"120px"}} className="tittle">
               Galite,TABARKA
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/experiences/galite_2016.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
     Probablement le spot de camping le plus convoité ! Galite est un archipel constitué d’un ensemble d'îles rocheuses.
      L’endroit, calme et idyllique, offre un moment de détente et de tranquillité pour les campeurs
     </div>
     <div className="mapss">
         <p style={{backgroundColor:"#0f575f"}}> location </p>
         
         <GoogleMaps />
        
    
 
     </div>
     
     <div style={{paddingBottom:"100px"}} className="wether">
         <p style={{backgroundColor:"#0f575f", paddingBottom:"30px"}}> weather </p>
     <Wether />
     </div>

    
 </div>
 </div>

     );
}
 
export default Tabarka;