import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './zaghouen.css';
import GoogleMaps from './map';
import Wether from './wether'

const Zaghouen = () => {
    return ( 
        
       <div>    
           <br/> <br/> <br/> <br/> 
    <div className="containerx">
      
      <div className="tittle">
               Zaghouen
          </div>
      <div className ="imagess">
          
     <img src={'https://www.tunisienumerique.com/wp-content/uploads/2019/08/haouaria-1.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Située au niveau de la partie nord-est, 
      la montagne de Zaghouan dispose de plusieurs plateaux où vous pouvez installer vos tentes et camper en toute sécurité.
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
 
export default Zaghouen;