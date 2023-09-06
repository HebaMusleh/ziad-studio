import React, { useContext } from 'react';

import { themeContext } from '../../context/themeContext';
import { darkTheme, lightTheme } from '../../global/theme';

import { Style } from './style';

const BtnTheme = () => {
  const [theme, setTheme] = useContext(themeContext);
  const toggleTheme = () => {
    setTheme((theme) => (theme.theme === 'light' ? darkTheme : lightTheme));
    localStorage.setItem('theme', theme.theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <Style>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme.theme === 'dark'}/>
        <span className="slider">
        </span>
      </label>
    </Style>
  );
}

export default BtnTheme;