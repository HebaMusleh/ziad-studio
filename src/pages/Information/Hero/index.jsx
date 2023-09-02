import React from 'react';
import TitleHero from './../../../components/TitleHero/index';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <TitleHero
            title={t('infoTitle')}
            desc={t('infoDesc')}
        />
    );
};

export default Hero;