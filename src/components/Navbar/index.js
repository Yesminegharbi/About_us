import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/256669699_430020825139081_1109894578405239504_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=JvzNL-in3dkAX8e36tA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=b82e769d0a517f4d3473a301a7861c40&oe=61B916C6"/>

          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/aboutus" activeStyle>
              About_us
            </NavLink>
            <NavLink to='/page2' activeStyle>
               Destination
            </NavLink>
            <NavLink to='/products' activeStyle>
               Products
            </NavLink>
            
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <div style={{marginLeft:"90px",marginTop:"30px"}} > 
        <NavBtnLink to='/Login' >Login</NavBtnLink>
        <NavBtnLink to='/sign-up' >Sign Up</NavBtnLink> </div>
      </Nav>
    </>
  );
};

export default Navbar;