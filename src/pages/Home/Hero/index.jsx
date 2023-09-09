import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Container } from '../../../global/component'
import { HeroStyle } from './style';

import img1 from '../../../assets/slide-1.jpg';
import img2 from '../../../assets/slide-2.jpg';
import img3 from '../../../assets/slide-3.jpg';
import img4 from '../../../assets/slide-4.jpg';
import img5 from '../../../assets/slide-5.jpg';
import img6 from '../../../assets/slide-6.jpg';
import img7 from '../../../assets/slide-7.jpg';
import img8 from '../../../assets/slide-8.png';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Hero = () => {
    return (
        <HeroStyle>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img6} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img7} alt="slide" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img8} alt="slide" />
                    </SwiperSlide>
                </Swiper>
        </HeroStyle >
    )
}

export default Hero