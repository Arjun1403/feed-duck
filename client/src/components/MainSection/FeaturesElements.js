
import { css } from 'styled-components';
import styled,{ThemeProvider } from 'styled-components';


export const Paragraph=styled.p`
    position:'relative';
`;

export const FeatureBody=styled.body`
background-color:#f4f4f4;
${(props)=> props.bgColor!=undefined && css`
background-color:${props.bgColor};
`};

color: #555;
font-family: 'Lato', 'Arial', sans-serif;
font-weight: 300;
font-size: 20px;
text-rendering: optimizeLegibility;
overflow-x: hidden;
height:700px;
`;

export const FeatureSection = styled.div`
    margin-bottom: 30px;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    
`;

export const FeatureRow = styled.div`
max-width: 1140px;
margin: 0 auto;
zoom:1;
content:"";
`;

export const FeatureColSpan = styled.div`
    display: block;
    float:left;
    align-items:center;
    margin: 5% 0 1% 1.6%;
    width:23.0%;
    ${Paragraph}{
        margin-top:3%;
        font-size:18px;
        
    }
`;

export const ParagraphLong = styled.p`
margin-top:2%;
line-height: 145%;
width: 70%;
margin-left: 15%;
`;

export const FeatureIcon = styled.i`
font-size: 350%;
display: block;
color: #013155;
margin-bottom: 10px;
`;

export const FeatureHeader = styled.h2 `
    margin-top:5%;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 180%;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    ${(props)=> props.bgColor!=undefined && css`
    color:#B7C5CF;
    `};
    &:after{
        display: block;
        height: 2px;
        background-color: #013155;
        ${(props)=> props.bgColor!=undefined && css`
        background-color:${props.bgColor};
        `};
        
        content: " ";
        width: 100px;
        margin: 0 auto;
        margin-top: 30px;
    }

`;
