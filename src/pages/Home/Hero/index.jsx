import React, { useState } from 'react'

import { motion, useTime, useTransform } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import { useTranslation } from 'react-i18next';


import { Container } from '../../../global/component'
import { HeroStyle } from './style';


import heroCircle from '../../../assets/her1.png';
import heroPincel from '../../../assets/her2.png';
import ContactModal from '../../ContactModal';

import cloud from '../../../assets/cloud.png';



const Hero = () => {
    const { t } = useTranslation();
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <HeroStyle>
            <Container>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className={`innerWidth container-hero`}
                >
                    <div className="cloud" style={{left:'0'}}>
                        <img src={cloud} alt="cloud" />
                    </div>
                    <motion.span className="left-side" variants={fadeIn("right", "tween", 0.2, 1)}>
                        <img src={heroCircle} alt="circle" />
                        <motion.div style={{ rotate }} className='pincel'>
                            <img src={heroPincel} alt="hero img" />
                        </motion.div>
                    </motion.span>
                    <motion.span className="right-side" variants={fadeIn("left", "tween", 0.4, 1)}>
                        <h1>
                            {t('heroTitle')} <span>{t('heroSpan')}</span>
                        </h1>
                        <p>
                            {t('hero')}
                        </p>
                        <button onClick={openModal}>{t('contactUS')}</button>
                    </motion.span>
                </motion.div>
                <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
            </Container>
        </HeroStyle>
    )
}

export default Hero