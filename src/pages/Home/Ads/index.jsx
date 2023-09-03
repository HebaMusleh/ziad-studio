import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Container } from '../../../global/component';
import { AdsStyle } from './style';
import Card from './Card';

import { fadeIn } from '../../../utils/motion';

import { CiCoffeeCup } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';
import { SiSlideshare } from 'react-icons/si';

const Ads = () => {
    const { t } = useTranslation();

    return (
        <AdsStyle>
            <Container>
                <motion.div className="card-container" variants={fadeIn("right", "tween", 0.2, 1)}>
                    <Card icons={<SlCalender />} num="1760" title={t('day')} />
                    <Card icons={<CiCoffeeCup />} num="1360" title={t('cup')} />
                    <Card icons={<SiSlideshare />} num="18" title={t('customrs')} />
                </motion.div>
            </Container>
        </AdsStyle>
    );
};

export default Ads;
