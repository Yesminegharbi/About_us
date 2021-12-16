import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './jendouba.css';
import GoogleMaps from './map';
import Wether from './wether'

const Jendouba = () => {
    return ( 
        <div>
            <br/> <br/> <br/> <br/>
    <div className="containerx">
      
      <div className="tittle">
               Jendouba
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/bouhertma.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Si vous décidez de faire du camping à Bouhertma, vous pouvez vous rendre au centre de camping « Bouhertma Outdoor » ou vous pouvez tout simplement installer vos tentes dans la forêt. 
      Le matin, vous pouvez aussi faire du kayak au barrage de Sidi Bou Hertma
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
 
export default Jendouba;