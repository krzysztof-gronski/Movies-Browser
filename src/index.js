import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./core/theme";
import { GlobalStyle } from "./core/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import App from "./core/App";
import { Provider } from "react-redux";
import store from "./core/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <ThemeProvider theme={theme} >
      <GlobalStyle />
      <App/>
    </ThemeProvider>
   </Provider>
 </React.StrictMode>
);

reportWebVitals();
