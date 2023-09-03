import React from 'react';
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

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Supporter() {
  const { t } = useTranslation();

  return (
    <SupporterStyle>
      <Container>
        <div className="wrapper">
          <Title
            title={t('leadingCustomer')}
            desc={t('descLeading')}
          />
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{ delay: 2000 }} // Set the delay in milliseconds
            pagination={{ clickable: true }} // Enable pagination
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="imgBox">
                <img src={img1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={img2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={img3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={img4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={img5} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={img6} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={img7} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={img8} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="imgBox">
                <img src={img9} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </SupporterStyle>
  );
}
