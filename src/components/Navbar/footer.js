import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from './NavbarElements';
  const Footer = () => {
    return (
      <Box>
          <Row>
          <img style={{ maxWidth:"70px"}} src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/256669699_430020825139081_1109894578405239504_n.png?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=JvzNL-in3dkAX8e36tA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=b82e769d0a517f4d3473a301a7861c40&oe=61B916C6"/>

            <Column>
              <FooterLink href="#">Home</FooterLink>
            </Column>
            <Column>
              <FooterLink href="#">Location</FooterLink>
            </Column>
            <Column>
            <a style={{   marginTop:"50%",marginLeft:"50%",marginRight:"50%"}}href="#" class="fa fa-facebook"></a>
            </Column>
            <Column>
            <a style={{   marginTop:"50%",marginLeft:"50%",marginRight:"50%"}}href="#" class="fa fa-twitter"></a>
            </Column>
            <Column>
            <a style={{   marginTop:"50%",marginLeft:"50%",marginRight:"50%" }}href="#" class="fa fa-instagram"></a>
            </Column>
            <Column>
            <a style={{   marginTop:"50%",marginLeft:"50%",marginRight:"50%"}}  href="#" class="fa fa-google"></a>
            </Column>
            <Column>
              <FooterLink href="#">Languages</FooterLink>
            </Column>
            <Column>
            <FooterLink href="#">Support</FooterLink>
            </Column>
          </Row>
          <br/>
          <p style={{fontFamily: 'Poppins',fontSize:'13px',color:"#021d20",opacity:"0.7",textAlign:"center"}}>&copy; 2021 website developed by Campy team</p>
      </Box>
    );
  };
  export default Footer;