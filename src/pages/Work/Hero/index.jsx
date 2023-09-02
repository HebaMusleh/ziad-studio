import React from 'react'


import { useTranslation } from 'react-i18next'
import { AiOutlinePhone } from 'react-icons/ai';

import { Style } from './style';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Style>
            <h1>{t('workTitle')}</h1>
            <p>{t('workpageDescription')}</p>
            <button onClick={() => navigate('/modal')}>{t('contactUS')}<AiOutlinePhone /></button>
        </Style>
    )
}

export default Hero