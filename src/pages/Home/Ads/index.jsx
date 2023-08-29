import React from 'react'

import { CiCoffeeCup } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl'
import { SiSlideshare } from 'react-icons/si'

import { Container } from '../../../global/component'
import { AdsStyle } from './style'
import Card from './Card'

const Ads = () => {
    return (
        <AdsStyle>
            <Container>
                <div className="card-container">
                    <Card icons={<SlCalender />} num="1,760+" title="يوم" />
                    <Card icons={<CiCoffeeCup />} num="1,360+" title="كوب من القهوة" />
                    <Card icons={<SiSlideshare />} num="18+" title="عميل دائم" />
                </div>
            </Container>
        </AdsStyle>
    )
}

export default Ads