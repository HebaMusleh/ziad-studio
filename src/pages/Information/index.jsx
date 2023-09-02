import React from 'react'
import Hero from './Hero'
import Card from './Card'
import { Container } from '../../global/component'

const Information = () => {
    return (
        <div>
            <Container>
                <Hero />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Container>
        </div>
    )
}

export default Information