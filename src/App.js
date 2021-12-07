import './App.css';
import { BrowserRouter, NavLink} from 'react-router-dom';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './pages';
import About_us from './components/Navbar/aboutus';
import Destinations from './pages/Destination';
import Login from './pages/Login';
import SignUp from './pages/signup';
import Footer from './components/Navbar/footer';
import react from 'react';
import React, { Component } from 'react';
import ImageGallaryComponent from './pages/ImageSlider';
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
          <Route path='/Login' component={Login} />
          <Route path='/page2' component={Destinations} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/products' component={ImageGallaryComponent} />

          

          </div>
        </Switch>
      </Router> <Footer /></>
    );
  }
  export default App;