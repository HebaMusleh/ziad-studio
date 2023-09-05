import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./global/theme";
import { themeContext } from "./context/themeContext";
import { GlobalStyle } from "./global/style";
import Spinner from "./components/Spinner";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import Router from "./Router";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(darkTheme);
  const { i18n } = useTranslation();

  useEffect(() => {
    localStorage.getItem("theme") === darkTheme.theme
      ? setTheme(darkTheme)
      : setTheme(lightTheme);
    console.log(theme);
  }, [theme]);

  const [close, setClose] = useState(false);

  const closeClick = () => {
    setClose(false);
  };
  const openClick = () => {
    setClose(true);
  };
  console.log(theme.theme);
  const direction = i18n.language === "en" ? "ltr" : "rtl";
  console.log(close);
  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
        <GlobalStyle dir={direction} close={close} />
        <Header openClick={openClick} dir={direction} theme={theme.theme} />
        <Suspense fallback={<Spinner />}>
          <Router />
        </Suspense>
        <SideMenu
          close={close}
          closeClick={closeClick}
          dir={direction}
          theme={theme.theme}
        />
        <Footer />
      </themeContext.Provider>
    </ThemeProvider>
  );
}
