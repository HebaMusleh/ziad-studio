import React from 'react'

import styled from 'styled-components'

import img from '../../assets/darklogo.png';
import { useTranslation } from 'react-i18next';
import BtnOrder from '../BtnOrder';
import { useNavigate } from 'react-router-dom';
import { BsBehance, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Container } from '../../global/component';
import { FooterStyle } from './style';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <FooterStyle>
      <Container>
        <div className='top_footer'>
          <div className='menu'>
            <div className='btn'>
              <BtnOrder />
            </div>
            <div className="list">
              <ul>
                <li onClick={() => navigate('/')}>{t('Home')}</li>
                <li onClick={() => navigate('/info')}>{t('Information')}</li>
                <li onClick={() => navigate('/#customers')}><a href="/#customers">{t('customers')}</a></li>
              </ul>
            </div>
          </div>
          <div className='logo'>
            <img src={img} alt="logo" />
          </div>
        </div>
        <div className="socials">
          <ul>
            <li><a href="https://www.instagram.com/_ziadstudio/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"><BsInstagram /></a></li>
            <li><a href="https://www.behance.net/_ziadstudio"><BsBehance /></a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=%2B966568117840&text&type=phone_number&app_absent=0"><BsWhatsapp /></a></li>
          </ul>
        </div>
        <div className="copyright">
          {t('footer')}
        </div>
      </Container>
    </FooterStyle>
  )
}

export default Footer