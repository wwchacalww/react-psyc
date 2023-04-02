import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: ${(props) => props.theme["blue-600"]};
  color: ${(props) => props.theme["black"]};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

h1, strong {
  font-weight: 700;
}

button {
  cursor: pointer;
}
`;
