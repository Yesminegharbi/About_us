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
          
          </div>
        </Switch>
      </Router> <Footer /></>
    );
  }
  export default App;