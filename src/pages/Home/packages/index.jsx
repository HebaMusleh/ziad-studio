import React from 'react';
import { Container } from '../../../global/component';
import { H3, AllCard } from './style';
import Title from '../../../components/Title';
import { useTranslation } from 'react-i18next';

import G1 from '../../../assets/G1.png';
import G2 from '../../../assets/G2.png';
import G3 from '../../../assets/G3.png';

import Card from './Card';

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
                t('stampDesign'),
                t('patternDesign'),
                t('logoDesign'),
                t('envelopeDesign'),
                t('vehicleDesign'),
                t('uniformDesign'),
                t('signageDesign'),
                t('deskSignDesign'),
                t('businessCardDesign'),
                t('letterheadDesign'),
                t('employeeCardDesign'),
                t('socialMediaTemplateDesign'),
                t('logoAnimation'),
                t('posterDesign'),
                t('brandIdentityGuide')

            ],
        },
        {
            img: G3,
            title: t('package2'),
            desc: t('descPackages'),
            price: `10.200 ${t('SAR')}`,
            num: 5,
            options: [
                t('menuDesign'),
                t('patternDesign'),
                t('logoDesign'),
                t('businessCardDesign'),
                t('uniformDesign'),
                t('letterheadDesign'),
                t('externalSignDesign'),
                t('packagingDesign'),
                t('posterDesign'),
                t('brandIdentityGuide')
            ],
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
            <AllCard>
                {cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </AllCard>
        </Container>
    );
};

export default Packages;
