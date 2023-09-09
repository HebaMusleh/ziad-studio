import { createGlobalStyle } from "styled-components";
import '../assets/fonts/VIP Rawy Bold Bold.ttf';
import '../assets/fonts/VIP Rawy Thin Thin.ttf';

export const GlobalStyle = createGlobalStyle`
* {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
a{
    text-decoration:none;
}
.root{
    overflow-x: hidden;
}
body{
    background:${(props) => props.theme.palette.background};
    direction:${(props) => props.dir};
    font-family: 'VIP Rawy Bold Bold', sans-serif;
    transition:.8s;
}
`;
