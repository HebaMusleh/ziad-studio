import React from 'react'


import { Container } from '../../../global/component'
import { H3, AllCard } from './style'

import Title from '../../../components/Title'
import Card from './Card'

import G1 from '../../../assets/G1.png'
import G2 from '../../../assets/G2.png'
import G3 from '../../../assets/G3.png'
import { useTranslation } from 'react-i18next'



const Packages = () => {
    const { t } = useTranslation();
    const cardData = [
        {
            img: G1,
            title: t('package1'),
            desc:
                'تصميم ثلاث شعارات واختيار احد التصاميم ',
            price: '16.500 ريال',
            num: 10
        },
        {
            img: G3,
            title: t('package2'),
            desc: "تصميم ثلاث شعارات واختيار احد التصاميم",
            price: '16.500 ريال',
            num: 5
        },
        {
            img: G2,
            title: t('package3'),
            desc: "تصميم ثلاث شعارات واختيار احد التصاميم",
            price: '16.500 ريال',
            num: 2
        },
    ];
    return (
        <Container>
            <Title title="خدماتنا" desc="ضف لمسة من الإبداع إلى علامتك التجارية مع خدمات مصمم الجرافيك لدينا، حيث نحول الأفكار إلى تصاميم بصرية تلفت الأنظار وتخطف القلوب." />
            <H3>تصميم الهوية البصرية </H3>
            <AllCard>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        img={card.img}
                        title={card.title}
                        desc={card.desc}
                        price={card.price}
                        num={card.num}
                    />
                ))}
            </AllCard>

        </Container>
    )
}

export default Packages