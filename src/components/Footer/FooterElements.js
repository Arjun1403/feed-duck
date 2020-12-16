import { css } from 'styled-components';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import { GiPlasticDuck } from 'react-icons/gi';
 




export const FeedFooter = styled.footer`
background-color: #013155;
padding: 50px;
font-size: 80%;
`;

export const FeedRow = styled.div`
max-width: 1140px;
margin: 0 auto;
zoom:1;
content:"";
`;

export const FeedCol = styled.div` 
   display: block;
    float:left;
    align-items:center;
    margin: 1% 0 1% 1.6%;
    width:48.0%;    
`;

export const FeedList = styled.ul` 
list-style: none;
float: left;
${(props) => props.isSocial && css`
float: right;
`};
`;
export const FeedLink = styled(Link)`
display: inline-block;
margin-right: 20px;
font-size:1rem;
text-decoration: none;
border: 0;
color: #888;
-webkit-transition: color 0.2s;
transition: color 0.2s;
&:last-child{
    margin-right:0
}
`;

export const FbIcon = styled(FaFacebookF)`
transition: color 0.2s;
font-size:1rem;
&:hover{
    color:#3b5998
}
`;
export const TwIcon = styled(FaTwitter)`
transition: color 0.2s;
font-size:1rem;
&:hover{
    color:#00aced
}
`;
export const InIcon = styled(FaInstagram)`
transition: color 0.2s;
font-size:1rem;
&:hover{
    color:#517fa4
}
`;
export const GmIcon = styled(SiGmail)`
transition: color 0.2s;
font-size:1rem;
&:hover{
    color:#dd4b39
}
`;

export const FeedParagraph = styled.p`
color: #888;
text-align: center;
margin-top: 20px;
font-size:1rem;
`;

export const FeedSym= styled(Link)`

color: #fff;
text-decoration: none;
align-items: center;
display: flex;
cursor: pointer;
font-size:2rem;

`;

export const FeedIcon = styled(GiPlasticDuck)`
    margin-right:5px;
    transform:scale(2);
    transform:scaleX(-1);
`;
