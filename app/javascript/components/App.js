import React from "react";
import Router from "../routes";
import Header from "../components/Header"
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../assets/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightMode } from "../assets/theme";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

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