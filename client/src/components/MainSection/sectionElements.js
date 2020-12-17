import { css } from 'styled-components';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';


export const HeroSection = styled.div`
    color:#fff;
    padding:160px 0;
    ${(props) => props.darkBackground && css`
      background-color: #0F293D;
    `};
`;


export const HeroContainer = styled.div`
margin-left:145px;
@media screen and (max-width:991px){
    .container{
        padding-right: 30px;
        padding-left: 30px;
    }
`;
export const HeroRow = styled.div`
display: flex;
margin: 0 -15px -15px 45px;
flex-wrap: wrap;
align-content: stretch;
align-items: center;
${(props) => props.imageStart && css`
    flex-direction: row-reverse;
`};
`;

export const Column = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0%;
padding-bottom: 60px;
`;

export const MainLine = styled.div`

color: #fff;
font-size: 16px;
line-height: 16px;
font-weight: 800;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
${(props) => !props.lightText && css`
    color: #013155;
`};
`;


export const Header = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color:#f7f8fa;
${(props) => !props.lightText && css`
    color: #013155;
`};


`;

export const Paragraph = styled.p`
max-width: 440px;
margin-bottom:35px;
font-size: 18px;
line-height: 24px;
${(props) => !props.lightText && css`
    color: #013155;
`};
`;

export const SectionLink = styled(Link)`

`;
export const ContributeLink = styled(Link)`
    
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

export const SectionButton = styled.button`
padding: 12px 64px;
font-size: 20px;
`;

export const ImageWrapper = styled.div`
    max-width: 555px;
`;

export const Image = styled.img`
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;

`;
