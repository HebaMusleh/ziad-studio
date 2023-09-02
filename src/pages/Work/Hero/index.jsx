import React from 'react'

import { useTranslation } from 'react-i18next'

import TitleHero from '../../../components/TitleHero';


const Hero = () => {
    const { t } = useTranslation();
    return (
        <TitleHero
            title={t('workTitle')}
            desc={t('workpageDescription')}
            btn="true"
            t={t}
        />
    )
}

export default Hero