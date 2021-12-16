import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './beja.css';
import GoogleMaps from './map';
import Wether from './wether'

const Beja = () => {
    return ( 
        <div>
            <br/> <br/> <br/> <br/>
    <div className="containerx">
      
      <div className="tittle">
               Beja
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Sidi_El_Barrak.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Situé au nord-ouest de la Tunisie, le barrage de Sidi El Barrak est très connu par les campeurs. Considéré comme l’un des barrages les plus importants du pays,
       ce barrage vous offre un cadre magnifique pour un séjour au cœur de la nature.
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
 
export default Beja;