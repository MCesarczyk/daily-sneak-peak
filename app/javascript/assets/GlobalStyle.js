import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  height: 100%;
}

*, ::after, ::before {
  box-sizing: inherit;
}

:focus {
  outline-offset: 8px;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  transition: color ease-in 1s;
  background-color: #fafafa;
  color: #525252;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}

button {
  cursor: pointer;
  display: block;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: unset;

  &:hover {
    filter: brightness(0.8);
    background-color: unset;
  }
}`