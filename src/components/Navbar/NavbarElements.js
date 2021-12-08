import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
export const Nav = styled.nav`
  background: #9a8c98;
  border-radius: 3px;
  height: 80px;
  display: flex;
  position: fixed;
  top: 0;
  opacity:0.8;
  left: 0;
  right:0;
    justify-content: stretch;
    padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  width: 100%

`;

export const NavLink = styled(Link)`
  color: #ffffff;
  align-items: center;
  margin-left:50px;
  display: flex;
  font-family: 'Poppins';
  text-decoration: none;
  font-size:17px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #ffffff;
  }

`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  
  border-radius: 4px;
  font-size:13px;
  font-family: 'Poppins';
  background: #4a4e69;
  padding: 15px;
  color: #ffffff;
  outline: none;
  margin-left:2px;
  margin-right:2px;
  vertical-align:middle;
  text-align: center;
  position: relative;
  left:50%;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
export const Box = styled.div`
  bottom: 0;
  opacity:0.8;

  padding: 50px 60px;
  border-radius: 3px;
  height: 100px;
  background: #9a8c98;
  left: 0;
  right:0;
  @media (max-width: 1000px) {
    padding: 100px 30px;
  }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    `;
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  
`;
export const Row = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, 
   minmax(100px, 1fr));
  grid-gap: 10px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
    minmax(100px, 1fr));
  }
  
`;
export const FooterLink = styled.a`
  color: #ffffff;
  font-size: 15px;
  text-decoration: none;
  font-family: 'Poppins';
  margin-top:50%;

  &:hover {
      color: #ffffff;
      font-size: 18px;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
export const fa  = styled.a`
padding: 20px;
font-size: 30px;
width: 30px;
text-align: center;
text-decoration: none;
border-radius: 50%;
&:hover {
  opacity: 0.7;
}
`;
export const fafacebook  = styled.a`
background: #3B5998;
  color: white;
`;
export const fatwitter  = styled.a`
background: #55ACEE;
  color: white;
`;
export const fondecran=styled.img` 
  position: fixed; 
  top: 0; 
  left: 0; 
  min-width: 100%;
  min-height: 100%;
  `;
  export const aboutClass=styled.div` 
  opacity:"0.89";
  `;  
export const Column1 = styled.div`
  display: flex;
    flex-direction: column;
  margin-left:auto;
  

`;
export const Row1 = styled.div`
  display: grid;
  
  grid-template-columns: repeat(auto-fill, 
   minmax(100px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
    minmax(100px, 1fr));
  }

`;
export const imgg = styled.img`
border-radius:60px;
width:120px;
&:hover {
  width:200px
}
`

export const NavBtnLinkk = styled(Link)`
  
  border-radius: 4px;
  font-size:12px;
  position: absolute;
  overflow: hidden;
  font-family:poppins;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
    background: #4a4e69;
  padding: 7px;
  color: #ffffff;
  outline: none;
    text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }`
