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
import { ModalProvider } from "./context/modalContext";

export default function App() {
  const [theme, setTheme] = useState(lightTheme);
  const { i18n } = useTranslation();

  useEffect(() => {
    localStorage.getItem("theme") === darkTheme.theme
      ? setTheme(darkTheme)
      : setTheme(lightTheme);
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
        <ModalProvider>
          <themeContext.Provider value={[theme, setTheme]}>
            <GlobalStyle dir={direction} close={close} />
            <Suspense fallback={<Spinner />}>
              <Header openClick={openClick} theme={theme.theme} />
              <Suspense
                fallback={
                  <FullHeight>
                    <Spinner />
                  </FullHeight>
                }
              >
                <Router />
              </Suspense>
              <SideMenu
                close={close}
                closeClick={closeClick}
                theme={theme.theme}
              />
              <Footer />
              <ArrowToTop />
            </Suspense>
          </themeContext.Provider>
        </ModalProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
