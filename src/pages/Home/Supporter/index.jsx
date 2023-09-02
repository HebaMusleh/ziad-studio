import React from 'react'


import img1 from '../../../assets/Support1.png';
import img2 from '../../../assets/Support2.png';
import img3 from '../../../assets/Support3.png';
import img4 from '../../../assets/Support4.png';
import img5 from '../../../assets/Support5.png';
import img6 from '../../../assets/Support6.png';
import img7 from '../../../assets/Support7.png';
import img8 from '../../../assets/Support8.png';


import { SupporterStyle } from './style'

import Title from '../../../components/Title'
import { Container } from '../../../global/component';
import ImgBox from './ImgBox/index';

import { useTranslation } from 'react-i18next';

const Supporter = () => {
  const { t } = useTranslation();

  return (
    <SupporterStyle>
      <Container>
        <div className='wrapper'>
          <Title
            title={t('leadingCustomer')}
            desc={t('descLeading')}
          />
          {/* <ImgBox baseVelocity={-5} images={[img1, img2, img3, img4]} /> */}
          {/* <ImgBox baseVelocity={5} images={[img5, img6, img7, img8]} /> */}
          <div className="scroll">
            <div className="imgBox"><img src={img1} alt="" /></div>
            <div className="imgBox"><img src={img2} alt="" /></div>
            <div className="imgBox"><img src={img3} alt="" /></div>
            <div className="imgBox"><img src={img4} alt="" /></div>
          </div>
          <div className="scroll">
            <div className="imgBox"><img src={img5} alt="" /></div>
            <div className="imgBox"><img src={img6} alt="" /></div>
            <div className="imgBox"><img src={img7} alt="" /></div>
            <div className="imgBox"><img src={img8} alt="" /></div>
          </div>
        </div>
      </Container>
    </SupporterStyle>
  )
}

export default Supporter