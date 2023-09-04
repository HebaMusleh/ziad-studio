import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { StyleTitle } from './style';

const TitleHero = ({ title, desc, btn, t }) => {
    return (
        <StyleTitle>
            <h1>{title}</h1>
            <p>{desc}</p>
            {btn ? <button>{t('contactUS')}<AiOutlinePhone /></button> : ''}
        </StyleTitle>
    );
};

export default TitleHero;
