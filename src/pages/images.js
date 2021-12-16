import {Link } from 'react-router-dom';
import './images.css'
import Tabarka from "./tbarka";
const Images = () => {
    return ( 
        <div>
        <div className="row1">
        < div classname="bx">
        
           <img className="im" src={'https://www.marhba.com/images/Galite.jpg'}   />  
           <div className="label"> 
           <Link to="/Tabarka" activestyle>
                  TABARKA 
                </Link>
                </div>  
        </div>

        < div classname="bx">
         <img className="im" src={'https://www.marhba.com/images/hawaria.jpg'}   />
        
            <div className="label"> <Link to="/Haouaria" activestyle>
                  EL HAOUARIA 
                </Link>  </div>
           </div>
   < div classname="bx">
      <img  className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Ain_Kanassira_.jpg'}   />
      <div className="label"> <Link to="/nabeul" activestyle>
                  NABEUL 
                </Link> </div>
         
   </div>
   </div>

   <div className="row1">
        < div classname="bx">
          
           <img className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Oued_Zen_.jpg'}  />   
           <div className="label"> <Link to="/drahem" activestyle>
                  AIN DRAHEM 
                </Link> </div> 
        </div>

        < div classname="bx">
         <img className="im"  src={'https://www.marhba.com/images/zaghouane-montgne.jpg'}   />
         <div className="label"> <Link to="/zaghouen" activestyle>
                  ZAGHOUEN 
                </Link> </div>
            
           </div>
   < div classname="bx">
      <img className="im"  src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Sidi_El_Barrak.jpg'}   />
      <div className="label"> <Link to="/beja" activestyle>
                  BEJA
                </Link> </div>
         
   </div>
   </div>

   <div className="row1">
        < div classname="bx">
          
           <img  className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Beni_Mtir.jpg'}   />   
           <div className="label"> <Link to="/jendouba" activestyle>
                  JENDOUBA 
                </Link> </div> 
        </div>

        < div classname="bx">
         <img className="im" src={'https://www.marhba.com/images/alternatif/alternatif2020/capserrat.jpg'}   />
         <div className="label"> <Link to="/bizerte" activestyle>
                  BIZERTE 
                </Link> </div>
            
           </div>
   < div classname="bx">
      <img  className="im" src={'https://www.voyage-tunisie.info/wp-content/uploads/2017/10/Tamerza-nature-800x500.jpg'}   />
      <div className="label"> <Link to="/Tozeur" activestyle>
                  TOZEUR 
                </Link> </div>
         
   </div>
   </div>

   </div>







     );
}
 
export default Images;