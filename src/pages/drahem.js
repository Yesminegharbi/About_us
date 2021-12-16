import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './drahem.css';
import GoogleMaps from './map';
import Wether from './wether'

const Drahem = () => {
    return ( 
        <div>
       
   
       <br/> <br/> <br/> <br/>
        
    <div className="containerx">
      
      <div className="tittle">
               EL Haouaria
          </div>
      <div className ="imagess">
          
     <img src={'https://www.tunisienumerique.com/wp-content/uploads/2019/08/haouaria-1.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Connue pour ses plages paradisiaques, El Haouaria contient une réserve naturelle riche en faune et en flore.
       El Haouaria est très appréciée par les campeurs pour son côté sauvage.
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
 
export default Drahem;