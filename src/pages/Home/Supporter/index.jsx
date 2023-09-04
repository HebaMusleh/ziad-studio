import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../../components/Title';
import { Container } from '../../../global/component';
import { SupporterStyle } from './style';
import img1 from '../../../assets/Support1.png';
import img2 from '../../../assets/Support2.png';
import img3 from '../../../assets/Support3.png';
import img4 from '../../../assets/Support4.png';
import img5 from '../../../assets/Support5.png';
import img6 from '../../../assets/Support6.png';
import img7 from '../../../assets/Support7.png';
import img8 from '../../../assets/Support8.png';
import img9 from '../../../assets/Support9.png';

export default function Supporter() {
  const { t } = useTranslation();

  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    const copy = logosSlide.cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <SupporterStyle id="customers">
      <Container>
        <div className="wrapper">
          <Title title={t('leadingCustomer')} desc={t('descLeading')} />
          <div className="logos">
            <div className="logos-slide">
              {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, index) => (
                <img src={img} alt={`Logo ${index + 1}`} key={index} />
              ))}
              {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, index) => (
                <img src={img} alt={`Logo ${index + 10}`} key={index + 10} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SupporterStyle>
  );
}
