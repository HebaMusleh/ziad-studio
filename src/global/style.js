import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
}
a{
    text-decoration:none;
}
body{
    background-color:${props=>props.theme.palette.background};
    direction:rtl;
    font-family: 'Baloo Bhaijaan 2', cursive;
}
`;