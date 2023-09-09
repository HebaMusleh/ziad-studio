import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }
  .root {
    overflow-x: hidden;
  }
  body {
    background: ${(props) => props.theme.palette.background};
    direction: ${(props) => props.dir};
    font-family: 'Rawy-Bold', Rawy-Thin; /* Apply the 'Bold' font to the body */
    transition: .8s;
  }
`;
