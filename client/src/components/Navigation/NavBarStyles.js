import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md'
import { GiPlasticDuck } from 'react-icons/gi'
import {  NavLink as PathLink } from 'react-router-dom';
import { Link } from "react-scroll";
import { css } from 'styled-components';
import styled,{ThemeProvider } from 'styled-components';

export const NavBar = styled.div`
    background: #013155;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 10;
    // padding: 0.5rem calc((100vw - 1000px) / 2);
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
`;

export const NavigationLink = styled(Link)`
    
    color: #fff;
    text-decoration: none;
    align-items: center;
    display: flex;
    cursor: pointer;
    justify-content:space-between;

    ${(props)=> props.islink && css`
    padding: 0 1rem;
    &:hover {
        transform:scale(1.1);
        color: #f7A200;
     }
    `};
    ${(props)=> !props.islink && css`
     font-size:1.6rem
    `};
    ${(props)=> props.isButton && css`
    font-size:1.6rem
    width: 100%;
    height: 140px;
    justify-content:center
   `};

`;

export const NavigationLinkToComponent = styled(PathLink)`
    
    color: #fff;
    text-decoration: none;
    align-items: center;
    display: flex;
    cursor: pointer;
    justify-content:space-between;

    ${(props)=> props.islink && css`
    padding: 0 1rem;
    &:hover {
        transform:scale(1.1);
        color: #f7A200;
     }
    `};
    ${(props)=> !props.islink && css`
     font-size:1.6rem
    `};
    ${(props)=> props.isButton && css`
    font-size:1.6rem
    width: 100%;
    height: 140px;
    justify-content:center
   `};
// export const NavigationLink = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active {
//     color: #15cdfc;
//   }
// `;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

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
export const Times = styled(FaTimes)`
  display: none;
  
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
export const NavMobile = styled.ul`

    display: flex;
    align-items: center;
    justify-content: center;
    
    text-align: center;
    color:#343434
    list-style: none;
`;

export const NavIcon = styled(GiPlasticDuck)`
    margin-right:5px;
    transform:scale(2);
    transform:scaleX(-1);
`;

export const NavMenu = styled.div`
    display:none
`;
export const NavButton = styled.button`
    background-color: transparent;
    color:#fff;
    padding: 8px 20px;
    border: 1px solid #fff;
    font-size: 15px;
    transition: all 0.3s ease-out;
    &:hover {
        transform:scale(1.1);
        color: #f7A200;
     }
`;
