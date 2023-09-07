import React from 'react'
import { CardStyle } from './style'

import BtnOrder from '../../../../components/BtnOrder';

import { useTranslation } from 'react-i18next';

import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useLanguage } from '../../../../context/directionContext';

const Card = ({ title, img, desc1, desc2 }) => {
    const { t } = useTranslation();
    const {direction} = useLanguage();
    return (
        <CardStyle dir={direction}>
            <div className="images">
                <div className="singleImg">
                <img src={img} alt="card-1-" loading='lazy'/>
                </div>
            </div>
            <div className="title">
                <h3>{t(title)}</h3>
            </div>
            <div className="desc">
                <div className='line'>
                    <div className="icons">
                        <BsFillCheckCircleFill />
                    </div>
                    <p>{t(desc1)}</p>
                </div>
                <div className='line'>
                    <div className="icons">
                        <BsFillCheckCircleFill />
                    </div>
                    <p>{t(desc2)}</p>
                </div>
            </div>
            <div className="btn">
                <BtnOrder />
            </div>
        </CardStyle>
    )
}

export default Card;
