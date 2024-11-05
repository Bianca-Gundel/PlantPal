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
    text-align: center;
    padding: 0 10px;
  }

  

`;
