import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { GlobalStyle } from "./core/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import { MainContainer } from "./common/MainContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer />
    </ThemeProvider>
 </React.StrictMode>
);

reportWebVitals();
