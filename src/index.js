import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { GlobalStyle } from "./core/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import MovieData from "./MovieData"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MovieData />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
