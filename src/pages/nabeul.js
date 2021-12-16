import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './nabeul.css';
import GoogleMaps from './map';
import Wether from './wether'

const Nabeul = () => {
    return ( 
        <div>
            <br/> <br/> <br/> <br/>
    <div className="containerx">
      
      <div className="tittle">
               Nabeul
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Rtiba.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Qui dit Rtiba, dit une magnifique forêt et une plage vierge. Rtiba possède aussi un charme et une magie d’exception. 
      Elle est connue pour être un spot de camping.
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
 
export default Nabeul;