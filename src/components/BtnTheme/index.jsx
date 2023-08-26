import React, { useContext } from 'react';
import styled from 'styled-components';
import { themeContext } from '../../context/themeContext';
import { darkTheme, lightTheme } from '../../global/theme';
const ThemeBtn = styled.button`
    position:absolute;
    border:none;
    cursor:pointer;
    top:5px;
    right:5%;
    background:transparent;
    img{
        width:70px;
        border-radius: 6px;
    }
`
const BtnTheme = () => {
    const [theme, setTheme] = useContext(themeContext);
    const toggleTheme = () => {
        setTheme((theme) => (theme.theme === 'light' ? darkTheme : lightTheme));
        localStorage.setItem('theme', theme.theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <>
            <ThemeBtn onClick={toggleTheme}>
                button test
            </ThemeBtn>
        </>
    )
}

export default BtnTheme