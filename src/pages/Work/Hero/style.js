import styled from "styled-components";

export const Style = styled.div`
margin:20px auto;
text-align:center;
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 68px;
    letter-spacing: 0em;
    color: #1f81b0;
  }
  p {
    font-family: Baloo Bhaijaan 2;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    color: ${props=>props.theme.palette.workTitle};
    width:70%;
    margin:0 auto;
  }
  button{
    padding:5px 30px;
border-radius: 8px;
background: #1F81B0;
color:#fff;
font-size: 1.5rem;
font-weight: 600;
line-height: 41px;
letter-spacing: 0em;
border:1px solid #1F81B0;
cursor:pointer;
display:flex;
align-items:center;
gap:10px;
margin:50px auto;

  }
`;
