import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import Card from './Card';
import { Container } from '../../global/component';
import styled from 'styled-components';
import InfoData from '../../mock/InfoData';
import Spinner from '../../components/Spinner';
import FullHeight from '../../components/FullHeight';
import Footer from '../../components/Footer';
import ContactModal from '../ContactModal';
import { useModal } from '../../context/modalContext';


const Information = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const infoData = InfoData();
  const { isModalOpen, closeModal } = useModal();


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
        <>
          <Container>
            <Hero />
            {data.map((singleData) => (
              <Card
                key={singleData.id}
                BG={singleData.BG}
                question={singleData.question}
                answer={singleData.answer}
                link={singleData.link}
                answer1={singleData.answer1}
                answer2={singleData.answer2}
                answer3={singleData.answer3}
                answer4={singleData.answer4}
                answer5={singleData.answer5}
              />
            ))}
          </Container>
        <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
        <Footer/>
        </>
      )}
    </>

  );
};

export default Information;
