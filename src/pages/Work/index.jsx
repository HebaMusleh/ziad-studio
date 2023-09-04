import React from 'react';
import { Container } from '../../global/component';
import Hero from './Hero';
import Card from './Card';
import Modal from '../Modal';
import WorkData from '../../mock/workData';
import  styled  from 'styled-components';

const Style = styled.div`
padding-top:7%;
@media (max-width: 768px) {
    padding-top:13%;
  }
`
const Work = () => {
    const data = WorkData();
    return (
        <Style>
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
        </Style>
    );
};

export default Work;
