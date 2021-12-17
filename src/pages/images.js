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
        <a href="/Tabarka" >
           <img className="im" src={'https://www.marhba.com/images/Galite.jpg'}   />  </a>
           <div className="label"> 
           <a href="/Tabarka"  style={{textDecoration:'none'}} >
                  Tabarka 
                </a>
                </div>  
        </div>

        < div classname="bx">
        <a href="/drahem" >
         <img className="im" src={'https://www.marhba.com/images/hawaria.jpg'}   />
        </a>
            <div className="label"> <a href="/drahem" style={{textDecoration:'none'}}>
                  El haouaria 
                </a>  </div>
           </div>
   < div classname="bx">
   <a href="/nabeul">
      <img  className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Ain_Kanassira_.jpg'}   />
      </a>
      <div className="label"> <a href="/nabeul" style={{textDecoration:'none'}}>
                  Nabeul
                </a> </div>
         
   </div>
   </div>

   <div className="row1">
        < div classname="bx">
        <a href="/Haouaria">
           <img className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Oued_Zen_.jpg'}  />   
         </a> 
           <div className="label"> <a href="/Haouaria" style={{textDecoration:'none'}}>
                  Ain drahem
                </a> </div> 
        </div>

        < div classname="bx">
        <a href="/zaghouen">
         <img className="im"  src={'https://www.marhba.com/images/zaghouane-montgne.jpg'}   />
         </a>
         <div className="label"> <a href="/zaghouen" style={{textDecoration:'none'}}>
                  Zaghouen 
                </a> </div>
            
           </div>
   < div classname="bx">
   <a href="/beja">
      <img className="im"  src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Sidi_El_Barrak.jpg'}   />
      </a>
      <div className="label"> <a href="/beja" style={{textDecoration:'none'}}>
                  Beja
                </a> </div>
         
   </div>
   </div>

   <div className="row1">
        < div classname="bx">
        <a href="/jendouba">
           <img  className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Beni_Mtir.jpg'}   />   
           </a>
           <div className="label"> <a href="/jendouba" style={{textDecoration:'none'}}>
                  Jendouba
                </a> </div> 
        </div>

        < div classname="bx">
        <a href="/bizerte">
         <img className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/capserrat.jpg'}   />
         </a>
         <div className="label"> <a href="/bizerte" style={{textDecoration:'none'}}>
                  Bizerte
                </a> </div>
            
           </div>
   < div classname="bx">
   <a href="/Tozeur">
      <img  className="im" src={'https://www.voyage-tunisie.info/wp-content/uploads/2017/10/Tamerza-nature-800x500.jpg'}   />
      </a>
      <div className="label"> <a href="/Tozeur" style={{textDecoration:'none'}}>
                  Tozeur 
                </a> </div>
         
   </div>
   </div>

   </div>







     );
}
 
export default Images;