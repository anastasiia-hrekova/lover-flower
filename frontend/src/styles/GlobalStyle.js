import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

body {
  font-family: 'Cormorant', 'Oswald', sans-serif;
  background-color: ${({ theme }) => theme.backgroundColor};
  color:  ${({ theme }) => theme.textColor};
  overflow-x: hidden;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
;
}`;

export default GlobalStyle;
