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
            price: '16.500 ريال',
            num: 10,
            options: [
                "تصميم الختم",
                "تصميم الباترن",
                "تصميم الشعار",
                "تصميم الأظرف",
                "تصميم المركبات",
                "تصميم الزي الموحد",
                "تصميم اللوح الارشادية",
                "تصميم اللوح المكتبية",
                "تصميم البزنس كارد",
                "تصميم ورق المراسلات",
                "تصميم بطاقات الموظفين",
                "تصميم قوالب السوشال ميديا",
                "تحريك الشعار بالموشن جرافيك",
                "تصميم الملصقات والبروشور",
                "تسليم دليل استخدام الهوية البصرية"
                
            ],
        },
        {
            img: G3,
            title: t('package2'),
            desc: t('descPackages'),
            price: '16.500 ريال',
            num: 5,
            options: [
                "تصميم المنيو",
                "تصميم الباترن",
                "تصميم الشعار",
                "تصميم البزنس كارد",
                "تصميم الزي الموحد",
                "تصميم ورق المراسلات",
                "تصميم اللوحة الخارجية",
                "تصميم التغليف والأكياس",
                "تصميم الملصقات والبروشور",
                "تسليم دليل استخدام الهوية البصرية"
            ],
        },
        {
            img: G2,
            title: t('package3'),
            desc: t('descPackages'),
            price: '16.500 ريال',
            num: 2,
            options: [
                "تصميم الباترن",
                "تصميم الشعار",
                "تصميم البزنس كارد",
                "تصميم ورق المراسلات",
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
