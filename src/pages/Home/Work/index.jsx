import React from 'react';
import Title from '../../../components/Title';
import { WorkStyle ,MoreBtn} from './style';
import { Container } from '../../../global/component';
import { motion } from 'framer-motion';
import { staggerChildren, textVariant2 } from '../../../utils/motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import MockWork from '../../../mock/mockWork';

const Work = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const data = MockWork();

  return (
    <WorkStyle>
      <Title title={t('work')} desc={t('workDesc')} />
      <Container>
        <div className="images">
          {data.map((item) => (
            <Card img={item.img1} id={item.id} key={item.id} title={item.title} />
          ))}
        </div>
        <motion.section
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`paddings moreBtn`}>
          <motion.div variants={textVariant2} className={`flexCenter singleImg`}>
            <MoreBtn onClick={() => navigate('/work')}> {t('show')} +</MoreBtn>
          </motion.div>
        </motion.section>
      </Container>
    </WorkStyle>
  );
};

export default Work;
