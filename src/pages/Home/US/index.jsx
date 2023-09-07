import React from 'react';
import img from '../../../assets/us.png';
import left from '../../../assets/left.png';
import right from '../../../assets/right.png';
import { Container } from '../../../global/component';
import Title from '../../../components/Title';
import { motion } from 'framer-motion';
import { staggerChildren } from '../../../utils/motion.js';
import { USStyle } from './style';
import { useTranslation } from 'react-i18next';

const US = () => {
  const { t } = useTranslation();
  return (
    <USStyle>
      <Container>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`us-content`}>
          <div className="right-wrapper">
            <img src={right} alt="" />
          </div>
          <div className="left-wrapper">
            <img src={left} alt="" />
          </div>
          <div className="images">
            <img src={img} alt="images" />
          </div>
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings`}>
            <Title title={t('AboutTitle')} desc={t('About')} />
          </motion.div>
        </motion.div>
      </Container>
    </USStyle>
  );
}

export default US;
