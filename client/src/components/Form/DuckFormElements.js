
import { css } from 'styled-components';
import styled, { ThemeProvider } from 'styled-components';


export const FormSection = styled.section`
background-color:#f4f4f4;
height:700px;
margin-bottom:5px;
`;

export const FeedForm = styled.form`
    width: 60%;
    margin: 0 auto;
`;
export const Input =styled.input`

padding: 7px;
border-radius: 3px;
border: 1px solid #ccc;
font-size:1.2rem;
width:100.0%;
&:foucs{
    outline:none;
}
${(props) => !props.isDisplay && css`
display:none;

`};
`;
export const Label =styled.label`
 font-size:1.2rem;
 display:block;
 ${(props) => !props.isDisplay && css`
display:none;

`};

`;



export const Select =styled.select`
width: 100%;
padding: 7px;
border-radius: 3px;
border: 1px solid #ccc;
&:foucs{
    outline:none;
}
`;

export const FeedCol = styled.div`
    display: block;
    float:left;
    align-items:center;
    margin: 1% 0 1% 1.6%;
    width:31.0%;
    ${(props) => props.isValue && css`
    width:65.0%;
`};

`;
export const FormHeader = styled.h2 `
     
    padding-top: 60px;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 180%;
    word-spacing: 2px;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 1px;
    &:after{
        display: block;
        height: 2px;
        background-color: #013155;
        content: " ";
        width: 100px;
        margin: 0 auto;
        margin-top: 30px;
    }

`;


























