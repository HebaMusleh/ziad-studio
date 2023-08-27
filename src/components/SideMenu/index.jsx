import React from 'react'

import { AiFillCaretDown, AiOutlineHome } from "react-icons/ai";
import { HiOutlineDocumentReport, HiOutlineMoon } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";

import logo from '../../assets/logo.png';
import { SideStyle } from './style';
import BtnTheme from '../BtnTheme';

const SideMenu = () => {
  return (
    <SideStyle>
      <aside>
        <ul>
          <li>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <IoClose />
            </div>
          </li>
          <hr />
          <li><AiOutlineHome /><a href="/#">الرئيسية</a></li>
          <li><HiOutlineDocumentReport /><a href="/#">المدونات</a></li>
          <li><HiOutlineDocumentReport /><a href="/#">الأسئلة الشائعة</a></li>
          <li><HiOutlineDocumentReport /><a href="/#">أبرز عملائنا</a></li>
          <hr />
          <li><LiaLanguageSolid /> اللغة<AiFillCaretDown /></li>
          <li>
            <div>
              <HiOutlineMoon /> الوضع المظلم
            </div>
            <div className='btn-theme'>
              <BtnTheme />
              </div>
          </li>
        </ul>
      </aside>
    </SideStyle>
  )
}

export default SideMenu