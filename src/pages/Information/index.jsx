import React from 'react';
import Hero from './Hero';
import Card from './Card';
import { Container } from '../../global/component';
import styled from 'styled-components';
import InfoData from '../../mock/InfoData';

const Style = styled.div`
  padding-top: 7%;
  @media (max-width: 768px) {
    padding-top: 13%;
  }
`;

const Information = () => {
  const data = InfoData();
  console.log(data);
  return (
    <Style>
      <Container>
        <Hero />
        {data.map((singleData) => (
          <Card
            key={singleData.id} 
            BG={singleData.BG}
            question={singleData.question}
            answer={singleData.answer}
          />
        ))}
      </Container>
    </Style>
  );
};

export default Information;
