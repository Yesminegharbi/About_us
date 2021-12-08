import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './produit.css'
import matelas from '../assets/products/matelas.jpg'
import sac from '../assets/products/saccamping.jpg'
import tente1 from '../assets/products/tentes/tente-camping-trigano-bilbao-2-places1.jpg'

  
    const items= [
      {id: 1, title: 'Camping Pad',img:matelas,href:'/camping-pad'},
      {id: 2, title: 'Camping Bag',img:sac,href:'camping-bag'},
      {id: 3, title: 'Tent',img:tente1,href:'/camping-tent'},
      {id: 4, title: 'Camping Table',img:'https://contents.mediadecathlon.com/p1757596/k$5f6afde636ebc761b055f38fb88e1db0/table-de-camping-pliante-4-tabourets-4-a-6-personnes.jpg?&f=800x800' ,href:'/camping-table'},
      {id: 5, title: 'Camping Chair',img:'https://contents.mediadecathlon.com/p1749361/k$96ca9266b4a34d7c1099b146f89eb230/fauteuil-pliable-pour-le-camping-basic.jpg?&f=452x452',href:'/camping-chair'},
    ]
  

 const ProductSlider= ()=> {
   
    return (
      <div  className='produit-slider' >
        <br/>
      <Carousel itemsToShow={3}>
        {items.map(item => <div  className='produit-slider-item'  key={item.id}><a href={item.href} className='produit-item-link'><img src={item.img} height='300' width='300' style={{borderRadius:'18%'}} /><div className='produit-item-title'>{item.title}</div></a></div>)}
      </Carousel>
      <br/> <br/>
      </div>
    )
  }
  export default ProductSlider
