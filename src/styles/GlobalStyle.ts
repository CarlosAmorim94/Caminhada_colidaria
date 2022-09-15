import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    transition: all ease .5s;
    text-decoration: none;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
  }
  
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    background:rgb(77, 16, 154);
  }
  
  a {
    text-decoration: none;
    
    &:visited, :link, :hover, :active {
      text-decoration: none;
    }
  }

`;
