import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ImageSlider.css'
import sac1 from '../assets/products/sac camping/sac-a-dos-glaciere-pour-le-camping-et-la-randonnee-20-litres1.jpg'
import sac2 from '../assets/products/sac camping/sac-a-dos-glaciere-pour-le-camping-et-la-randonnee-20-litres2.jpg'
import sac3 from '../assets/products/sac camping/sac-a-dos-glaciere-pour-le-camping-et-la-randonnee-20-litres3.jpg'
import sac4 from '../assets/products/sac camping/sac-a-dos-glaciere-pour-le-camping-et-la-randonnee-20-litres4.jpg'
import sac5 from '../assets/products/sac camping/sac-a-dos-glaciere-pour-le-camping-et-la-randonnee-20-litres5.jpg'
import { QuantityPicker } from 'react-qty-picker';
import yesmine from '../assets/products/people/yesmine.jpg'
import imen from '../assets/products/people/imen.jpg'
import ibrahim from '../assets/products/people/ibrahim.jpg'
import matelas from '../assets/products/matelas.jpg'
import sac from '../assets/products/saccamping.jpg'
import {AiFillStar, FaBeer} from 'react-icons/fa'
class ImageGallaryComponentSac extends React.Component {

    onChangeEvent = () => {
        console.log('onChange Event Triggered');
    }

    onClickItemEvent = () => {
        console.log('onClickItem Event Triggered');
    }

    onClickThumbEvent = () => {
        console.log('onClickThumb Event Triggered');
    }

    onSwipeStartEvent = () => {
        console.log('onSwipeStart Event Triggered');
    }

    onSwipeEndEvent = () => {
        console.log('onSwipeEnd Event Triggered');
    }

    onSwipeMoveEvent = () => {
        console.log('onSwipeMove Event Triggered');
    }

    render() {
        return (
          <div style={{paddingTop:"50px",paddingLeft:"15%"}} className='Products'>
            
            <br/>
            <div className='shopping' >
            <div>
            <div className='column'>
               
                <div>
                <Carousel autoPlay interval="5000" infiniteLoop transitionTime="1000"width='40%' className='caroussel'

                    onChange={this.onChangeEvent}
                    onClickItem={this.onClickItemEvent}
                    onClickThumb={this.onClickThumbEvent}
                    onSwipeStart={this.onSwipeStartEvent}
                    onSwipeEnd={this.onSwipeEndEvent}
                    onSwipeMove={this.onSwipeMoveEvent}
                    
                >
                     <div >
                        <img src={sac5} />
                    </div>
                    <div >
                        <img src={sac1} />
                    </div>
                    <div>
                        <img src={sac2} />
                      
                    </div>
                   
                    <div>
                        <img src={sac4} />
                        
                    </div>
                </Carousel>
                </div>
                </div>
                <div style={{paddingTop:"150px"}} className='buy-pannel'>

                    <h3 style={{textAlign:"center"}} className='title'>Camping Bag </h3>
                    <h3 style={{textAlign:"center"}} className='price'>90dt </h3>

                    <div style={{textAlign:"center"}} className='QuantityPicker'>
                    <QuantityPicker min={0} />
                    </div>
                    <div style={{textAlign:"center"}} class="button">
                    <a>Acheter Maintenant</a>
                    </div>
                    </div>
            </div>
            </div>
            <div className='ratings'>
                <h2 className='ratings-title'>Ratings</h2>
                <br/>

                <ul className='ratings-section'>
                    <li className='people'>
                        <h3 style={{textAlign:"center"}}>Imen</h3>
                        <div className='image-and-rating'>
                        <img className='avatar' src={imen} width='100px' height='100px'/>
                        <p>trés dilicieuse</p>
                        </div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>


                    </li>
                    <li className='people'>
                        <h3 style={{textAlign:"center"}}>Yesmine</h3>
                        <div className='image-and-rating'>

                        <img  className='avatar' src={yesmine} width='100px' height='100px'/>
                        <p>j'aime</p>
                        </div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </li>
                    <li className='people'>
                        <h3 style={{textAlign:"center"}}>Ibrahim</h3>
                        <div className='image-and-rating'>

                        <img className='avatar' src={ibrahim} width='100px' height='100px'/>
                        <p>woooow moch 3adiya</p>
                        </div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>

                    </li>
                </ul>
            </div>
            <br/>
            <br/>
            <br/>


            <div className='other-products'>
                <ul className='other-products-items'>
                    <li className='item'>
                        <a href='camping-bag'>
                        <img src={sac} width='200px' height='200px'/>
                        <p style={{textAlign:"center"}}>Sac camping</p>
                        </a>
                    </li>
                    <li className='item'>
                        <a href='camping-pad'>
                        <img src={matelas} width='200px' height='200px'/>
                        <p style={{textAlign:"center"}}>matelas camping</p>
                        </a>
                    </li>
                </ul>
            </div>
            <br/>
            <br/>
            </div>
        )
    };
}

export default ImageGallaryComponentSac;