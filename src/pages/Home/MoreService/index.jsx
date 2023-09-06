import React from 'react'

import { Container } from '../../../global/component'
import { ServiceStyle } from './style'

import card1 from '../../../assets/card1.png';
import card2 from '../../../assets/card2.png';

import Card from './Card'
import { useTranslation } from 'react-i18next';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../utils/motion'
import Mobile from '../../../components/Mobile';
import NotMobile from '../../../components/NotMobile';
import FlipSwipe from '../../../components/FlipSwipe';

import { SwiperSlide } from 'swiper/react';

const MoreService = () => {
    const { t } = useTranslation();
    return (
        <ServiceStyle>
            <Mobile>
                <Container>
                    <h2>{t('more')}</h2>
                    <FlipSwipe>
                        <SwiperSlide>
                            <Card img={card1} title="titleService1" desc1="desc1Service1" desc2="desc2Service1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card img={card2} title="titleService2" desc1="desc1Service2" desc2="desc2Service2" />
                        </SwiperSlide>
                    </FlipSwipe>
                </Container>
            </Mobile>
            <NotMobile>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`innerWidth`}
                >
                    <Container>
                        <h2>{t('more')}</h2>
                        <div className="cards">
                            <motion.span className="singleCard" variants={fadeIn("left", "tween", 0.4, 1)}>
                                <Card img={card1} title="titleService1" desc1="desc1Service1" desc2="desc2Service1" />
                            </motion.span>
                            <motion.span className="singleCard" variants={fadeIn("right", "tween", 0.2, 1)}>
                                <Card img={card2} title="titleService2" desc1="desc1Service2" desc2="desc2Service2" />
                            </motion.span>
                        </div>
                    </Container>
                </motion.div>
            </NotMobile>
        </ServiceStyle>
    )
}

export default MoreService