import React, { useState } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineMoon } from "react-icons/hi";
import { BsLightbulb, BsPeople } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";
import { BiSolidDownArrow } from 'react-icons/bi';
import logo from '../../assets/logo.png';
import { SideStyle } from './style';
import BtnTheme from '../BtnTheme';
import { useTranslation } from 'react-i18next';

const SideMenu = ({ close, closeClick, dir }) => {
  const { i18n } = useTranslation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const ChangeLang = (lang) => {
    localStorage.setItem('lang', lang);
    i18n.changeLanguage(lang);
    setShowLanguageMenu(false);
  };

  return (
    <SideStyle className={close ? "show" : ""} dir={dir}>
      <aside>
        <ul>
          <li className='head'>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <IoClose className='closeIcon' onClick={closeClick} />
            </div>
          </li>
          <hr />
          <div className='secondSection'>
            <li><AiOutlineHome /><a href="/#">الرئيسية</a></li>
            <li><BsLightbulb /><a href="/#">معلومات</a></li>
            <li><BsPeople /><a href="/#">أبرز عملائنا</a></li>
          </div>
          <hr />
          <div className="thirdSection">
            <li className='head-languages'>
              <div className='languages-toggle'>
                <LiaLanguageSolid /> اللغة
                <BiSolidDownArrow
                  style={{ fontSize: "10px", cursor: 'pointer' }}
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                />
              </div>
              {showLanguageMenu && (
                <ul className='arabic-english-menu'>
                  <li onClick={() => ChangeLang("ar")}>العربية</li>
                  <li onClick={() => ChangeLang("en")}>English</li>
                </ul>
              )}
            </li>
            <li className='theme-btns'>
              <div>
                <HiOutlineMoon /> الوضع المظلم
              </div>
              <div className='btn-theme' >
                <BtnTheme dir={dir} />
              </div>
            </li>
          </div>
        </ul>
      </aside>
    </SideStyle>
  )
}

export default SideMenu;
