import React from 'react'
import Title from '../../../components/Title'

import img1 from '../../../assets/work1.png';
import img2 from '../../../assets/work2.png';
import img3 from '../../../assets/work3.png';
import img4 from '../../../assets/work4.png';
import img5 from '../../../assets/work5.png';
import img6 from '../../../assets/work6.png';

import { WorkStyle } from './style';
import { Container } from '../../../global/component';

import { motion } from 'framer-motion'
import { staggerChildren, textVariant2 } from "../../../utils/motion";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <WorkStyle>
      <Title
        title={t('work')}
        desc={t('workDesc')} />
      <Container>
        <motion.section
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`paddings images`}>
          <motion.div variants={textVariant2} className={`flexCenter singleImg`}><img src={img1} alt="img1" /></motion.div>
          <motion.div variants={textVariant2} className={`flexCenter singleImg`}><img src={img2} alt="img1" /></motion.div>
          <motion.div variants={textVariant2} className={`flexCenter singleImg`}><img src={img3} alt="img1" /></motion.div>
          <motion.div variants={textVariant2} className={`flexCenter singleImg`}><img src={img4} alt="img1" /></motion.div>
          <motion.div variants={textVariant2} className={`flexCenter singleImg`}><img src={img5} alt="img1" /></motion.div>
          <motion.div variants={textVariant2} className={`flexCenter singleImg`}><img src={img6} alt="img1" /></motion.div>
        </motion.section>
        <motion.section
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`paddings moreBtn`}>
          <motion.div variants={textVariant2} className={`flexCenter singleImg`}>
            <button onClick={() => navigate('/work')}> {t('show')} +</button>
          </motion.div>
        </motion.section>
      </Container>
    </WorkStyle>
  )
}

export default Work