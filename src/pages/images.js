import {Link } from 'react-router-dom';
import './images.css'
import Tabarka from "./tbarka";
var styles={
  links: {
      ":hover": {color: "red", textDecoration: "none"}
  }
}
const Images = () => {
    return ( 
        <div>
        <div className="row1">
        < div classname="bx">
        
           <img className="im" src={'https://www.marhba.com/images/Galite.jpg'}   />  
           <div className="label"> 
           <a href="/Tabarka"  style={{textDecoration:'none'}} >
                  Tabarka 
                </a>
                </div>  
        </div>

        < div classname="bx">
         <img className="im" src={'https://www.marhba.com/images/hawaria.jpg'}   />
        
            <div className="label"> <a href="/Haouaria" style={{textDecoration:'none'}}>
                  El haouaria 
                </a>  </div>
           </div>
   < div classname="bx">
      <img  className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Ain_Kanassira_.jpg'}   />
      <div className="label"> <a href="/nabeul" style={{textDecoration:'none'}}>
                  Nabeul
                </a> </div>
         
   </div>
   </div>

   <div className="row1">
        < div classname="bx">
          
           <img className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Oued_Zen_.jpg'}  />   
           <div className="label"> <a href="/drahem" style={{textDecoration:'none'}}>
                  Ain drahem
                </a> </div> 
        </div>

        < div classname="bx">
         <img className="im"  src={'https://www.marhba.com/images/zaghouane-montgne.jpg'}   />
         <div className="label"> <a href="/zaghouen" style={{textDecoration:'none'}}>
                  Zaghouen 
                </a> </div>
            
           </div>
   < div classname="bx">
      <img className="im"  src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Sidi_El_Barrak.jpg'}   />
      <div className="label"> <a href="/beja" style={{textDecoration:'none'}}>
                  Beja
                </a> </div>
         
   </div>
   </div>

   <div className="row1">
        < div classname="bx">
          
           <img  className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Beni_Mtir.jpg'}   />   
           <div className="label"> <a href="/jendouba" style={{textDecoration:'none'}}>
                  Jendouba
                </a> </div> 
        </div>

        < div classname="bx">
         <img className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/capserrat.jpg'}   />
         <div className="label"> <a href="/bizerte" style={{textDecoration:'none'}}>
                  Bizerte
                </a> </div>
            
           </div>
   < div classname="bx">
      <img  className="im" src={'https://www.voyage-tunisie.info/wp-content/uploads/2017/10/Tamerza-nature-800x500.jpg'}   />
      <div className="label"> <a href="/Tozeur" style={{textDecoration:'none'}}>
                  Tozeur 
                </a> </div>
         
   </div>
   </div>

   </div>







     );
}
 
export default Images;