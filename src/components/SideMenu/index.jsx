import React, { useState } from 'react'

// icons 
import { AiFillCaretDown, AiOutlineHome } from "react-icons/ai";
import { HiOutlineDocumentReport, HiOutlineMoon } from "react-icons/hi";
import { TbMessage2Question } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";

import logo from '../../assets/logo.png';

import { SideStyle } from './style';
import BtnTheme from '../BtnTheme';

const SideMenu = ({close,closeClick}) => {
  
  return (
    <SideStyle className={close ? "show" : ""}>
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
            <li><HiOutlineDocumentReport /><a href="/#">المدونات</a></li>
            <li><TbMessage2Question /><a href="/#">الأسئلة الشائعة</a></li>
            <li><BsPeople /><a href="/#">أبرز عملائنا</a></li>
          </div>
          <hr />
          <div className="thirdSection">
            <li className='head'>
              <div>
                <LiaLanguageSolid /> اللغة
              </div>
              <div className='arabic-english'>
                <button>Arabic</button>
              </div>
            </li>
            <li className='theme-btns'>
              <div>
                <HiOutlineMoon /> الوضع المظلم
              </div>
              <div className='btn-theme'>
                <BtnTheme />
              </div>
            </li>
          </div>
        </ul>
      </aside>
    </SideStyle>
  )
}

export default SideMenu