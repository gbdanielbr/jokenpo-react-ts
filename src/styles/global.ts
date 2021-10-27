import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Encode Sans SC', sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#345B63, #4B6587);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 1rem 'Encode Sans SC', sans-serif;
  text-align: center;
}

`
