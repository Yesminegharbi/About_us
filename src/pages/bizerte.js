import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './bizerte.css';
import GoogleMaps from './map';
import Wether from './wether'

const Bizerte = () => {
    return ( 
        <div>
            <br/> <br/> <br/> <br/>
    <div className="containerx">
      
      <div className="tittle">
               Bizerte
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/capserrat.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Situé dans le Nord-Ouest de la Tunisie, Cap Serrat se trouve entre Sejnane et Tabarka et face de l’archipel de La Galite.
       C’est l’une des parties les plus appréciées du littoral de Bizerte.
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
 
export default Bizerte;