import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../../components/Title';
import { Container } from '../../../global/component';
import { SupporterStyle } from './style';
import ImgBox from './ImgBox/index';
import img1 from '../../../assets/Support1.png';
import img2 from '../../../assets/Support2.png';
import img3 from '../../../assets/Support3.png';
import img4 from '../../../assets/Support4.png';
import img5 from '../../../assets/Support5.png';
import img6 from '../../../assets/Support6.png';
import img7 from '../../../assets/Support7.png';
import img8 from '../../../assets/Support8.png';

const Supporter = () => {
  const { t } = useTranslation();

  return (
    <SupporterStyle>
      <Container>
        <div className="wrapper">
          <Title
            title={t('leadingCustomer')}
            desc={t('descLeading')}
          />
          <div className="scroll">
            {[img1, img2, img3, img4].map((imgSrc, index) => (
              <div key={index} className="imgBox">
                <img src={imgSrc} alt={`Support Image ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="scroll">
            {[img5, img6, img7, img8].map((imgSrc, index) => (
              <div key={index} className="imgBox">
                <img src={imgSrc} alt={`Support Image ${index + 5}`} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SupporterStyle>
  );
};

export default Supporter;
