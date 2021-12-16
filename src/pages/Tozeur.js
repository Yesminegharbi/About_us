import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './Tozeur.css';
import GoogleMaps from './map';
import Wether from './wether'

const Tozeur = () => {
    return ( 
        <div> 
            <br/> <br/> <br/> <br/>
    <div className="containerx">
      
      <div className="tittle">
               Tozeur
          </div>
      <div className ="imagess">
          
     <img src={'https://www.vacances-tunisie.info/files/2012/11/camping-tunisie.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Vous etres au coeur du sahara, vivez une expérience inoubiable au sein de la nature 
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
 
export default Tozeur;