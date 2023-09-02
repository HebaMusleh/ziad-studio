import React from 'react'


import { useTranslation } from 'react-i18next'
import { AiOutlinePhone } from 'react-icons/ai';

import { Style } from './style';


const Hero = () => {
    const {t} = useTranslation();
  return (
    <Style>
        <h1>{t('workTitle')}</h1>
        <p>{t('workpageDescription')}</p>
        <button>{t('contactUS')}<AiOutlinePhone/></button>
    </Style>
  )
}

export default Hero