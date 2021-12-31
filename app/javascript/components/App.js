import React from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../assets/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../assets/theme";
import Header from "./Header";
import Router from "../routes";

const App = () => (
  <ThemeProvider theme={lightMode}>
    <Normalize />
    <GlobalStyle />
    <Router>
      <Header />
    </Router>
  </ThemeProvider>
);

export default App;