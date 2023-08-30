import { createGlobalStyle } from "styled-components";

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
    background-color: ${(props) =>props.close === true ? "#00000047" : props.theme.palette.background};
    direction:${(props) => props.dir};
    font-family: 'Baloo Bhaijaan 2', cursive;
    transition:.8s;
    overflow-x:hidden;
}
`;
