import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,::after,::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    margin: 0 auto;
  }
`;
