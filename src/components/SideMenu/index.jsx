import React, { useState } from 'react';


import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineMoon } from "react-icons/hi";
import { BsLightbulb, BsPeople } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';


import BtnTheme from '../BtnTheme';
import { useTranslation } from 'react-i18next';


import logo from '../../assets/logo.png';
import darkLogo from '../../assets/darklogo.png'
import { SideStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/directionContext';


const SideMenu = ({ close, closeClick, theme }) => {
  const { i18n, t } = useTranslation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const navigate = useNavigate();
  const { direction } = useLanguage();

  const ChangeLang = (lang) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <>
    <SideStyle className={close ? "show" : ""} dir={direction}>
      <aside>
        <ul>
          <li className='head'>
            <div className='logo'>
              {theme === "dark" ?
                <img src={darkLogo} alt="logo" loading="lazy"/>
                :
                <img src={logo} alt="logo" loading="lazy"/>
              }
            </div>
            <div>
              <IoClose className='closeIcon' onClick={closeClick} />
            </div>
          </li>
          <hr />
          <div className='secondSection'>
            <li onClick={() => navigate('/')}><AiOutlineHome /><div>{t('Home')}</div></li>
            <li onClick={() => navigate('/info')}><BsLightbulb /><div>{t('Information')}</div></li>
            <li onClick={() => navigate('/#customers')}><BsPeople /><a href="/#customers">{t('customers')}</a></li>
          </div>
          <hr />
          <div className="thirdSection">
            <li className='head-languages' onClick={() => setShowLanguageMenu(!showLanguageMenu)}>
              <div className='languages-toggle'>
                <LiaLanguageSolid /> {t('lang')}
                {showLanguageMenu ? <BiSolidUpArrow style={{ fontSize: "10px" }} /> : <BiSolidDownArrow style={{ fontSize: "10px" }} />}

              </div>
              {showLanguageMenu && (
                <ul className='arabic-english-menu'>
                  <li onClick={() => ChangeLang("ar")}>{t("Arabic")}</li>
                  <li onClick={() => ChangeLang("en")}>{t("English")}</li>
                </ul>
              )}
            </li>
            <li className='theme-btns'>
              <div>
                <HiOutlineMoon /> {t("Mode")}
              </div>
              <div className='btn-theme' >
                <BtnTheme />
              </div>
            </li>
          </div>
        </ul>
      </aside>
    </SideStyle>
    </>
  )
}

export default SideMenu;
