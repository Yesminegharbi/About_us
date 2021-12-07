import React from 'react';
import './aboutus.css';
import {
  imgg,
  NavBtnLinkk,
  Row1,
  Column1,
} from './NavbarElements';

const About_us = () => {
  return(

  <body class="back">

     <section style={{  paddingLeft:"400px",}} class="wrapper">
  <h2> Made for
  <div class="dynamic-words">
    <span className='dynamic-word'>Joy</span>
    <span className='dynamic-word'>Love</span>
    <span className='dynamic-word'>Fitness</span>
    <span className='dynamic-word'>Peace</span>
    <span className='dynamic-word'>You</span>
   </div>
  </h2>
</section>
    <h2 style={{fontFamily: 'Poppins',paddingTop:'250px',fontSize:'52px',fontWeight:"bold",
  color:"white",textAlign:"center",paddingRight:'0px'}}>About</h2>
  <h3 style={{fontFamily: 'Poppins',fontSize:'29px',
  color:"white",textAlign:"center",paddingRight:'0px'}}>Our story</h3>
  <br/>
  <div style={{fontFamily: 'Poppins',fontSize:'12px',backgroundColor: "white",
    color: "black",opacity:"0.5",width:"900px",margin:"auto",textAlign:"center",padding:"5px",borderRadius:"12px",paddingRight:'0px'}}>
      <p>the story of three engineers <br/> the story of three engineers <br/>the story of three engineers<br/> the story of three engineers <br/>the story of three engineers</p>
  </div>
  <br/>
  <h2 style={{fontFamily: 'Poppins',fontSize:'29px',
  color:"white",textAlign:"center",paddingRight:'0px'}}>Our team</h2>
  <br/>
<div style={{paddingLeft:"100px",paddingRight:'0px',paddingBottom:'250px'}} >
  <Row1>
  <Column1  style={{paddingLeft:"60px",}}>
<div class="container">
  <img class="image" style={{borderRadius:"100px",width:"200px"}} src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/64580623_1589802191151097_8349125233231265792_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Yd7diTMWzmUAX8Xjn6y&_nc_ht=scontent.ftun16-1.fna&oh=e17213991c74747cb6cf217dd1038415&oe=61BFB917"/>
  <div class="overlay">
    <div class="text">Yesmine Gharbi</div>
    <NavBtnLinkk to='#' >Contact</NavBtnLinkk>
  </div> </div>
  </Column1>
  <Column1 style={{paddingLeft:"210px",}}>
  <div class="container">
  <img  class="image" style={{ margin:"auto",borderRadius:"100px",width:"200px"}} src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-1/c145.0.320.320a/p320x320/137201969_3752873631437488_3233221631229005522_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=a2aIYv2A0OcAX_3kY7i&_nc_ht=scontent.ftun16-1.fna&oh=c8bfb4c1f8701fbbd791e0d683be6b26&oe=61BDB3CB"/>
  <div class="overlay">
    <div class="text">Iheb Belghouthi</div>
    <NavBtnLinkk to='#' >Contact</NavBtnLinkk>
  </div> </div>
  </Column1>
  <Column1 style={{paddingLeft:"360px",}}>
  <div class="container">
  <img class="image" style={{ margin:"auto",borderRadius:"100px",width:"200px"}} src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/151777125_3340586902714339_2221549848304229317_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=M6e96OL2GiwAX-fsyXm&_nc_oc=AQlanlj9JBa6xgO0ESK1RGYV3CwF2-Q7dj1Z3y8BNQ6Z0Pd4I5NBWrpsksPBibVbQRE&_nc_ht=scontent.ftun16-1.fna&oh=64d682f367e286e071a6a75f2528e79a&oe=61D1DF6B"/>
  <div class="overlay">
    <div class="text">Imen Azzouz</div>
    <NavBtnLinkk to='#' >Contact</NavBtnLinkk>

  </div> </div>
  </Column1>
  <Column1 style={{paddingLeft:"510px",}}>
  <div class="container">
  <img class="image" style={{ margin:"auto",borderRadius:"100px",width:"200px"}} src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/258467784_383717603541981_3449941357528514710_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=s3iSduMNAu4AX8mFf4w&tn=m7XxOqz4eNJssKZw&_nc_ht=scontent.ftun1-2.fna&oh=623463ee05cdee25d9a0666fa15a01eb&oe=61BFDC0C"/>
  <div class="overlay">
    <div class="text">Ibrahim Khemiri</div>
    <NavBtnLinkk to='#' >Contact</NavBtnLinkk>

  </div> </div>
  </Column1>
  </Row1>
</div>

    
  </body>
  )
};
  
export default About_us;