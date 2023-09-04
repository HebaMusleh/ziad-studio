import React from 'react';
import { Container } from '../../global/component';
import Hero from './Hero';
import Card from './Card';
import Modal from '../Modal';
import WorkData from '../../mock/workData';

const Work = () => {
    const data = WorkData();
    return (
        <>
            <Container>
                <Hero />
                {data.map((item, index) => (
                    <Card 
                    key={index} 
                    title={item.title} 
                    description={item.description} 
                    img={item.img1}
                    id={index+1} />
                ))}
                {/* <Modal/> */}
            </Container>
        </>
    );
};

export default Work;
