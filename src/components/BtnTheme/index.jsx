import React, { useContext } from 'react';

import { themeContext } from '../../context/themeContext';
import { darkTheme, lightTheme } from '../../global/theme';

import './style.css'


const BtnTheme = () => {
    const [theme, setTheme] = useContext(themeContext);
    const toggleTheme = () => {
        setTheme((theme) => (theme.theme === 'light' ? darkTheme : lightTheme));
        localStorage.setItem('theme', theme.theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="theme-btn-wrapper">
        <input type="checkbox" id="toggle_checkbox" onClick={toggleTheme} />
  
        <label htmlFor="toggle_checkbox">
          <div id="star">
            <div className="star" id="star-1">★</div>
            <div className="star" id="star-2">★</div>
          </div>
          <div id="moon"></div>
        </label>
      </div>
            );
}

            export default BtnTheme;
