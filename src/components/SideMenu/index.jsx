import React from 'react'

// icons 
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineDocumentReport, HiOutlineMoon } from "react-icons/hi";
import { BsLightbulb, BsPeople } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";

import logo from '../../assets/logo.png';

import { SideStyle } from './style';
import BtnTheme from '../BtnTheme';

import { useTranslation } from 'react-i18next';

const SideMenu = ({ close, closeClick, dir }) => {

  const { i18n } = useTranslation();
  const ChangeLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    localStorage.setItem('lang', newLang);
    i18n.changeLanguage(newLang);
  }
  console.log(dir)

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
            {/* <li><HiOutlineDocumentReport /><a href="/#">المدونات</a></li> */}
            <li><BsLightbulb /><a href="/#">معلومات</a></li>
            <li><BsPeople /><a href="/#">أبرز عملائنا</a></li>
          </div>
          <hr />
          <div className="thirdSection">
            <li className='head'>
              <div>
                <LiaLanguageSolid /> اللغة
              </div>
              <div className='arabic-english'>
                <button onClick={ChangeLang}>{i18n.language === "en" ? "العربية" : "English"}</button>
              </div>
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

export default SideMenu