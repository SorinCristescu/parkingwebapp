import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Barlow', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
main {
  position: relative;
  /* background-color: black; */
  min-height: 100vh;
}
a {
  text-decoration: none;
}
.container {
  padding-top: 100px;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
`;
