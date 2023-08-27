import React from 'react'

import { Container } from '../../../global/component'
import { ServiceStyle } from './style'
import Card from './Card'

const MoreService = () => {
    return (
        <ServiceStyle>
            <Container>
                <h2>مزيد من الخدمات </h2>
                <div className="cards">
                    <Card />
                    <Card />
                </div>
            </Container>
        </ServiceStyle>
    )
}

export default MoreService