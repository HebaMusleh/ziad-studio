import React from 'react'

import { Container } from '../../../global/component'
import { ServiceStyle } from './style'

import card1 from '../../../assets/card1.png';
import card2 from '../../../assets/card2.png';

import Card from './Card'

const MoreService = () => {
    return (
        <ServiceStyle>
            <Container>
                <h2>مزيد من خدماتنا </h2>
                <div className="cards">
                    <Card img={card1} title="titleService1" desc1="desc1Service1" desc2="desc2Service1" />
                    <Card img={card2} title="titleService2" desc1="desc1Service2" desc2="desc2Service2" />
                </div>
            </Container>
        </ServiceStyle>
    )
}

export default MoreService