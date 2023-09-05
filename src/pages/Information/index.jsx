import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Card from './Card';
import { Container } from '../../global/component';
import styled from 'styled-components';
import InfoData from '../../mock/InfoData';
import Spinner from '../../components/Spinner';
import FullHeight from '../../components/FullHeight';

const Style = styled.div`
  padding-top: 7%;
  @media (max-width: 768px) {
    padding-top: 13%;
  }
  @media (max-width: 480px) {
    padding-top: 0;
  }
`;

const Information = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const infoData = InfoData();


  useEffect(() => {
    setTimeout(() => {
      setData(infoData);
      setLoading(false);
    }, 1000);
  }, [infoData]);

  return (
    <>
      {loading ? (
        <FullHeight>
          <Spinner />
        </FullHeight>
      ) : (
        <Style>
          <Container>
            <Hero />
            {data.map((singleData) => (
              <Card
                key={singleData.id}
                BG={singleData.BG}
                question={singleData.question}
                answer={singleData.answer}
                link={singleData.link}
              />
            ))}
          </Container>
        </Style>
      )}
    </>

  );
};

export default Information;
