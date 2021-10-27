import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  background: gray;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: .8rem Roboto, sans-serif;
  text-align: center;
}

`;
