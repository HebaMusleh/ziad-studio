import React from 'react'

import { motion, useTime, useTransform } from "framer-motion";

import { Container } from '../../../global/component'
import styled from 'styled-components'


import heroCircle from '../../../assets/her1.png';
import heroPincel from '../../../assets/her2.png';

import { useTranslation } from 'react-i18next';

const HeroStyle = styled.div`
background:${props => props.theme.palette.heroBackground};
padding:100px 0;
.container-hero{
    display:flex;
    align-items:center;
    gap:10%;
    @media (max-width: 768px) {
        flex-direction:column;
      }
    
      @media (max-width: 480px) {
        /* Adjust properties for screens up to 480px */
        padding: 5px;
      }

    .left-side{
        flex-basis:60%;
        position:relative;
        img{
            width:100%;
            height:100%;
        }
        @media (max-width: 768px) {
            width:50%;
          }
        
          @media (max-width: 480px) {
            width:50%;
          }
    }
    .pincel{
        position:absolute;
        top:20px;
        left:10%;
        width:80%;
        img{
            width:100%;
            height:100%;
        }
    }
    .right-side{
       h1{
        font-size: 48px;
        font-weight: 500;
        line-height: 82px;
        letter-spacing: 0em;
        color:${props => props.theme.palette.blackFonts};
        span{
        color:${props => props.theme.palette.fontColor};
        @media (max-width: 768px) {
            font-size: 38px;
        }
        @media (max-width: 480px) {
            font-size: 28px;
        }
    }
       }
       p{
        font-size: 16px;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;

       }
       button{
        width: 282px;
        height: 56px;
        border-radius: 8px;
        background:${props => props.theme.palette.fontColor};
        font-size: 24px;
        font-weight: 600;
        line-height: 41px;
        letter-spacing: 0em;
        text-align: center;
        color:${props => props.theme.palette.whiteFonts};
        cursor:pointer;
        border:1px solid ${props => props.theme.palette.fontColor};
        margin-top:5%;
        &:hover{
        background:${props => props.theme.palette.serviceBg};
        border:none;
        outline:none;
}
}

    }
}

`
const Hero = () => {
    const { t } = useTranslation();
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
    return (
        <HeroStyle>
            <Container>
                <div className="container-hero">
                    <div className='left-side'>
                        <img src={heroCircle} alt="circle" />
                    <motion.div  style={{ rotate }} className='pincel'>
                        <img src={heroPincel} alt="hero img" />
                    </motion.div>
                    </div>
                    <div className="right-side">
                        <h1>
                            {t('heroTitle')} <span>{t('heroSpan')}</span>
                        </h1>
                        <p>
                            {t('hero')}
                        </p>
                        <button>{t('contactUS')}</button>
                    </div>
                </div>
            </Container>
        </HeroStyle>
    )
}

export default Hero