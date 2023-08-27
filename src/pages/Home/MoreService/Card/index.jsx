import React from 'react'
import { CardStyle } from './style'

import card1 from '../../../../assets/card1.png';
import check from '../../../../assets/check.png'
import BtnOrder from '../../../../components/BtnOrder';

const Card = () => {
    return (
        <CardStyle>
            <div className="images">
                <img src={card1} alt="card-1-" />
            </div>
            <div className="title">
                <h3>تصميم العبوات والاغلفة</h3>
            </div>
            <div className="desc">
                <div className='line'>
                    <div className="check-box">
                        <img src={check} alt="check" />
                    </div>
                    <p>تصميم تغليف منتج بمقاس واحد بـ 4800 ريال</p>
                </div>
                <div className='line'>
                    <div className="check-box">
                        <img src={check} alt="check" />
                    </div>
                    <p>تصميم تغليف منتج بمقاس واحد بـ 4800 ريال</p>
                </div>
                <div className="btn">
                <BtnOrder />
                </div>
            </div>
        </CardStyle>
    )
}

export default Card