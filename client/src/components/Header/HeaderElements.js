
import styled from 'styled-components';


export const HeroHeader = styled.div`

    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(duck2.jpg);
    background-repeat:no-repeat;

    background-size: cover;
    background-position: center;
    display:block;
    height: 100vh;
    background-attachment: fixed;
`;

export const Header1= styled.h1`
    positon:relative;
    font-weight: 300;
    text-transform: uppercase;

`;

export const HeroText = styled.div`
    position: absolute;
    width: 1140px;
    top: 60%;
    left: 40%;
    color:#fff;
    // font-weight:100;
    font-size:20px;
    transform: translate(-50%, -50%);
    ${Header1}{
        margin-top: 0;
        margin-bottom: 20px;
        color: #fff;
        font-size: 240%;
        word-spacing: 4px;
        letter-spacing: 1px;
    };

`;
