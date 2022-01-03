import React from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../assets/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../assets/theme";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const App = () => (
  <ThemeProvider theme={lightMode}>
    <Normalize />
    <GlobalStyle />
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;