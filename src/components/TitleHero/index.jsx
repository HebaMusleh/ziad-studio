import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { StyleTitle } from './style';

const TitleHero = ({ title, desc, btn, t }) => {
    const navigate = useNavigate();
    return (
        <StyleTitle>
            <h1>{title}</h1>
            <p>{desc}</p>
            {btn ? <button onClick={() => navigate('/modal')}>{t('contactUS')}<AiOutlinePhone /></button> : ''}
        </StyleTitle>
    );
};

export default TitleHero;
