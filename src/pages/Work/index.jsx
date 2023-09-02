import React from 'react'
import { Container } from '../../global/component'
import Hero from './Hero'
import Card from './Card'
import Modal from '../Modal'

const Work = () => {
    return (
        <>
            <Container>
                <Hero />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                {/* <Modal/> */}
            </Container>
        </>
    )
}

export default Work