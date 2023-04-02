import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/Auth";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
