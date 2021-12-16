import React from "react";
import '../menu.css'
import FadeIn from 'react-fade-in';
import SimpleImageSlider from "react-simple-image-slider";
import '../components/Navbar/section2.css'
import ProductSlider from "./produit";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
const images = [
    { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" ,   
  },
    { url: "https://www.outsideonline.com/wp-content/uploads/2019/05/28/how-to-camp_h.jpg" },
    { url: "https://i.guim.co.uk/img/media/a6a3dfbaaff0b2a556a71467a015bddd6fde352c/0_952_1999_1199/master/1999.jpg?width=1200&quality=85&auto=format&fit=max&s=f5d5f2d5f6b3bdae08fd8662576085db" },
  ];

  const Home=()=>{
    return(
    <div style={{ backgroundColor:"rgba(151,183, 176, 0.45)",width:"auto"}}>

        <div className='menu-slider'>
   
    </div>
    <div>
    <AliceCarousel  autoPlay='true' autoPlayInterval="3000" infinite='false' disableButtonsControls='true' 
       >
      <img src={images[0].url} className="sliderimg" alt=""/>
      <img src={images[1].url} className="sliderimg" alt=""/>
      <img src={images[2].url} className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
      
    < div className="slogan">
    <div class="article">
        <h2>ESCAPE</h2>
        <h4>into amazing experience </h4>

    </div>

        <div className='all'>
            <div class="row">  
             <div className="box1">
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
                        </div>
                        <div className="box2">
                            <p className="tips"> For a premium <br /> camping <br /> experience !  </p>
                        </div>

                        <p className="tips0" > Here is some tips  </p>

                       
                    </div>

                    <div className="box3">
                    <FadeIn>
                        <div className='image-1'>
                        <div className='desc'> 
                        <p>  First aid kit</p>
                        </div>
                        <img src={'https://images.unsplash.com/photo-1624638764471-cffef5035746?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpcnN0JTIwYWlkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
                        </div>
                      
                      
                        <div className='image-2'>

                        <div className='desc'> 
                        <p>  Don't forget about lightening</p>
                        </div>
                        <img src={'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
                        </div>
                        
                        <div className='image-3'>
                        <div className='desc'> 
                        <p>  See more </p>
                        </div>
                        <img src={'https://images.unsplash.com/photo-1496545672447-f699b503d270?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'}  />
                        </div>
                        
                    </FadeIn>

                    </div>
            </div>
            <div className="box6">
            <div className="box4">
                       <p> Best price</p>
                   </div>
                   <div className="box5">
                       <p> Best Equipements</p>
                   </div>
                   </div>
        </div>
        </div>
      <ProductSlider/>
        </div>
         )
}
export default Home 