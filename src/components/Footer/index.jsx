import React from 'react'

import styled from 'styled-components'

import img from '../../assets/logofooter.png';
import { useTranslation } from 'react-i18next';

const FooterStyle = styled.div`
text-align:center;
background: #1F81B0;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
gap:20px;
margin:auto;
padding:20px;
p{
font-size: 24px;
font-weight: 500;
line-height: 41px;
letter-spacing: 0em;
text-align: center;
@media (max-width: 480px) {
    font-size: 18px;
  }
.images{
    img{
    }
        width:100%;
        height:100%;
    }
}

`

const Footer = () => {
    const {t} = useTranslation();
    return (
        <FooterStyle>
            <div><p>{t('footer')}</p></div>
            <div className='images'><img src={img} alt="footerImg" /></div>
        </FooterStyle>
    )
}

export default Footer