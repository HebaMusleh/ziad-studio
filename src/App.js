import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./global/theme";
import { themeContext } from "./context/themeContext";
import { GlobalStyle } from "./global/style";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";

export default function App() {
  const [theme, setTheme] = useState(darkTheme);
  const {i18n} = useTranslation()

  useEffect(() => {
    localStorage.getItem("theme") === darkTheme.theme
      ? setTheme(darkTheme)
      : setTheme(lightTheme);
    console.log(theme);
  }, [theme]);

  const [close, setClose] = useState(false);

  const closeClick = () => {
    setClose(false);
  }
  const openClick = () => {
    setClose(true);
  }
  const direction = i18n.language === 'en' ? 'ltr' : 'rtl';
  console.log(close)
  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
        <GlobalStyle dir={direction} close={close}/>
        <Suspense fallback={<Spinner/>}>
          <Header openClick={openClick} dir={direction}/>
          <Home/>
          <SideMenu 
          close={close} 
          closeClick={closeClick} 
          dir={direction}/>
        </Suspense>
      </themeContext.Provider>
    </ThemeProvider>
  );
}
