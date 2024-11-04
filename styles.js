import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #cce0d2;
  }

  h1 {
    text-align: center;
  }

  

`;
