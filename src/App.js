import { useState, useEffect, Suspense } from "react";


import { ThemeProvider } from "styled-components";


import { lightTheme, darkTheme } from "./global/theme";
import { GlobalStyle } from "./global/style";


import { themeContext } from "./context/themeContext";
import { LanguageProvider } from "./context/directionContext";

import Spinner from "./components/Spinner";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FullHeight from "./components/FullHeight";


import { useTranslation } from "react-i18next";
import Router from "./Router";
import ArrowToTop from "./components/ArrowButton";

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
  const direction = i18n.language === "en" ? "ltr" : "rtl";
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <themeContext.Provider value={[theme, setTheme]}>
          <GlobalStyle dir={direction} close={close} />
          <Suspense fallback={<Spinner />}>
            <Header openClick={openClick} theme={theme.theme} />
  <main style={{minHeight:"50vh"}}>
  
            <Suspense
              fallback={
                <FullHeight>
                  <Spinner />
                </FullHeight>
              }
            >
              
              <Router />
            </Suspense>
              </main>
            <SideMenu
              close={close}
              closeClick={closeClick}
              theme={theme.theme}
            />
            <Footer />
            <ArrowToTop/>
          </Suspense>
        </themeContext.Provider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
