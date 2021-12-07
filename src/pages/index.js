import React from "react";
import '../menu.css'

import SimpleImageSlider from "react-simple-image-slider";

import ProductSlider from "./produit";
const images = [
    { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" },
    { url: "https://www.outsideonline.com/wp-content/uploads/2019/05/28/how-to-camp_h.jpg" },
    { url: "https://i.guim.co.uk/img/media/a6a3dfbaaff0b2a556a71467a015bddd6fde352c/0_952_1999_1199/master/1999.jpg?width=1200&quality=85&auto=format&fit=max&s=f5d5f2d5f6b3bdae08fd8662576085db" },
  ];

  const Home=()=>{
    return(
    <div>

        <div className='menu-slider'>
      <SimpleImageSlider
        width={1518}
        height={1000}
        images={images}
        showBullets={true}
        showNavs={false}
        autoPlayDelay={5}
        autoPlay={true}
        
      />
    </div>
      <ProductSlider/>
        </div>
         )
}
export default Home 