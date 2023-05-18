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
<<<<<<< HEAD
    font-size: 18px;
=======
    font-size: 14px;
>>>>>>> main
    margin: 0 auto;
    color:  ${({theme})=>theme.colors.black};
    background-color: ${({theme})=>theme.colors.whisper};
  }
`;
