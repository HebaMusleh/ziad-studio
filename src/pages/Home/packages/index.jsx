import React from 'react';
import { Container } from '../../../global/component';
import { H3, AllCard } from './style';
import Title from '../../../components/Title';
import { useTranslation } from 'react-i18next';

import G1 from '../../../assets/G1.svg';
import G2 from '../../../assets/G2.svg';
import G3 from '../../../assets/G3.svg';

import Card from './Card';
import NotMobile from '../../../components/NotMobile';
import Mobile from '../../../components/Mobile';
import MySwiper from '../../../components/MySwiper';
import { SwiperSlide } from 'swiper/react';


const Packages = () => {
    const { t } = useTranslation();

    const cardData = [
        {
            img: G1,
            title: t('package1'),
            desc: t('descPackages'),
            price: `16.500 ${t('SAR')}`,
            num: 10,
            options: [
                t('patternDesign'),
                t('logoDesign'),
                t('businessCardDesign'),
                t('letterheadDesign'),
                t('menuDesign'),
                t('uniformDesign'),
                t('externalSignDesign'),
                t('packagingDesign'),
                t('posterDesign'),
                t('stampDesign'),
                t('envelopeDesign'),
                t('vehicleDesign'),
                t('signageDesign'),
                t('deskSignDesign'),
                t('employeeCardDesign'),
                t('socialMediaTemplateDesign'),
                t('logoAnimation'),
            ],
            brand: "true",
            downList:"true"
        },
        {
            img: G3,
            title: t('package2'),
            desc: t('descPackages'),
            price: `10.200 ${t('SAR')}`,
            num: 5,
            options: [
                t('patternDesign'),
                t('logoDesign'),
                t('businessCardDesign'),
                t('letterheadDesign'),
                t('menuDesign'),
                t('uniformDesign'),
                t('externalSignDesign'),
                t('packagingDesign'),
                t('posterDesign'),
            ],
            brand: "true"
        },
        {
            img: G2,
            title: t('package3'),
            desc: t('descPackages'),
            price: `6700 ${t('SAR')}`,
            num: 2,
            options: [
                t('patternDesign'),
                t('logoDesign'),
                t('businessCardDesign'),
                t('letterheadDesign'),
            ],
        },
    ];

    return (
        <Container>
            <Title title={t('services')} desc={t('descServices')} />
            <H3>{t('design')}</H3>

            <NotMobile>
                <AllCard>
                    {cardData.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </AllCard>
            </NotMobile>
            <Mobile>
                <MySwiper>
                    {cardData.map((card, index) => (
                        <SwiperSlide key={index} >
                            <Card {...card} />
                        </SwiperSlide>
                    ))}
                </MySwiper>
            </Mobile>
        </Container>
    );
};

export default Packages;
