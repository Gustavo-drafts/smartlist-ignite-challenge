import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;

  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  padding: 0;
  background: #1A1A1A;
}


body, input, button {
  font-size: 16px;  
  box-sizing: border-box;
}
`;






