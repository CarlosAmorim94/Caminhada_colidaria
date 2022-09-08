import { createGlobalStyle } from "styled-components";
import Bg from "../assets/img/background.jpg";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    transition: all ease .5s;
    text-decoration: none;
    letter-spacing: 1px;
  }
  
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    background: url(${Bg}) no-repeat;
    background-size: cover;
    background-position: center;
  }
  
  a {
    text-decoration: none;
    
    &:visited, :link, :hover, :active {
      text-decoration: none;
    }
  }

`;
