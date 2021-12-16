import './App.css';
import { BrowserRouter, NavLink} from 'react-router-dom';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './pages';
import About_us from './components/Navbar/aboutus';
import Destinations from './pages/Destination';
import Login from './pages/Login';
import Footer from './components/Navbar/footer';
import react from 'react';
import React, { Component } from 'react';
import ImageGallaryComponentTente from './pages/ImageSlider-tente';
import ImageSlider from 'react-simple-image-slider';
import ImageGallaryComponentSac from './pages/imageSlider-Sac';
import ImageGallaryComponentPad from './pages/ImageSlider-Matelas';
import ImageGallaryComponentChair from './pages/ImageSliderChair';
import ImageGallaryComponentTable from './pages/ImageSlider-Table';
import Signin from './pages/signin';
import SignUp from './pages/signup'
import Tabarka from 'C:/Users/lenovo/About_us/src/pages/tbarka';
import Images from "C:/Users/lenovo/About_us/src/pages/images.js";
import "C:/Users/lenovo/About_us/src/pages/page2.css";
import Wether from "C:/Users/lenovo/About_us/src/pages/wether.js";
import Drahem from "C:/Users/lenovo/About_us/src/pages/drahem.js"
import Jendouba from 'C:/Users/lenovo/About_us/src/pages/Jendouba';
import Haouaria from 'C:/Users/lenovo/About_us/src/pages/Haouaria';
import Zaghouen from 'C:/Users/lenovo/About_us/src/pages/zaghouen';
import Bizerte from 'C:/Users/lenovo/About_us/src/pages/bizerte';
import Nabeul from 'C:/Users/lenovo/About_us/src/pages/nabeul';
import Beja from 'C:/Users/lenovo/About_us/src/pages/beja';
import Tozeur from 'C:/Users/lenovo/About_us/src/pages/Tozeur';
import {Link } from 'react-router-dom';
function App() {
    return (
      <>
        <Router>
        <Navbar/>

        <Switch>
          <div>
          <Route exact path='/' component={Home}/> 
          <Route path='/aboutus' ><About_us />
</Route>
          
          <Route path='/page2' component={Destinations} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/camping-tent' component={ImageGallaryComponentTente}/>
          <Route path='/camping-bag' component={ImageGallaryComponentSac}/>
          <Route path='/camping-pad' component={ImageGallaryComponentPad}/>
          <Route path='/camping-chair' component={ImageGallaryComponentChair}/>
          <Route path='/camping-table' component={ImageGallaryComponentTable}/>
          <Route path='/login' component={Signin} />
          <Route path='/tabarka' component={Tabarka} />
            <Route path='/drahem' component={Drahem} />
            <Route path='/jendouba' component={Jendouba} />
            <Route  path='/haouaria'>  
            <Haouaria />
            </Route>
            <Route  path='/zaghouen'>  
            <Zaghouen />
            </Route>
            <Route  path='/bizerte'>  
            
            <Bizerte />
            </Route>
            <Route  path='/nabeul'>  
            
            <Nabeul />
            </Route>
            <Route  path='/beja'>  
            
            <Beja />
            </Route>
            <Route  path='/tozeur'>  
            
           <Tozeur />
            </Route>
          
          </div>
        </Switch>
      </Router> <Footer /></>
    );
  }
  export default App;