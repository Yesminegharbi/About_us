import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './Haouaria.css';
import GoogleMaps from './map';
import Wether from './wether'

const Haouaria = () => {
    return ( 
        <div>
            <br/> <br/> <br/> <br/>
    <div className="containerx">
      
      <div className="tittle">
               Ain Drahem
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Oued_Zen_.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Le parc national de Oued Zen est situé à Aïn Drahem. Il fait partie de la Kroumirie et il s’étend sur une superficie de 6700 hectares.
       Isolé du bruit et de la pollution de a ville, Oued Zen est un endroit parfait pour camper.uvage.
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
 
export default Haouaria;