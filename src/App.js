import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./global/theme";
import { themeContext } from "./context/themeContext";
import { GlobalStyle } from "./global/style";
import BtnTheme from "./components/BtnTheme";
import Spinner from "./components/Spinner";
import { Container } from "./global/component";
import Home from "./pages/Home";

export default function App() {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    localStorage.getItem("theme") === darkTheme.theme
      ? setTheme(darkTheme)
      : setTheme(lightTheme);
    console.log(theme);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
        <GlobalStyle />
        <Suspense fallback={<Spinner/>}>
          <Home/>
        </Suspense>
      </themeContext.Provider>
    </ThemeProvider>
  );
}
