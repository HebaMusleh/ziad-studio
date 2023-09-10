import React from 'react'
import { ServicesStyle } from './style'

import img from '../../../assets/service.svg';
import rectangle from '../../../assets/rectangle.svg';
import { Container } from '../../../global/component';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const {t} = useTranslation();
    return (
        <ServicesStyle>
            <Container>
                <div className="content-service">
                <div className="description">
                    <div className="title">
                        <h3>{t('serviceTitle')}</h3>
                        <img src={rectangle} alt="rectangle" />
                    </div>
                    <div className="body">
                        <ul>
                            <li>{t('body1')}</li>
                            <li>{t('body2')}</li>
                            <li>{t('body3')}</li>
                            <li>{t('body4')}</li>
                            <li>{t('body5')}</li>
                        </ul>
                    </div>
                </div>
                <div className="images">
                    <img src={img} alt="service img" />
                </div>
                </div>
            </Container>
        </ServicesStyle>
    )
}

export default Services