import React, { useContext } from 'react';

import { themeContext } from '../../context/themeContext';
import { darkTheme, lightTheme } from '../../global/theme';

import { useState } from "react";
import { motion } from "framer-motion";

import './style.css'


const BtnTheme = ({ dir }) => {
  const [theme, setTheme] = useContext(themeContext);
  const [isOn, setIsOn] = useState(false);
  const toggleTheme = () => {
    setTheme((theme) => (theme.theme === 'light' ? darkTheme : lightTheme));
    localStorage.setItem('theme', theme.theme === 'dark' ? 'light' : 'dark');
    setIsOn(!isOn)
  };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  return (
    <div className="theme-btn-wrapper">
      <div className="switch" data-isOn={isOn} onClick={toggleTheme}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </div>
  );
}

export default BtnTheme;
