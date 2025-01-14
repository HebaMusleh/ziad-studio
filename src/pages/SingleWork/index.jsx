import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '../../global/component';
import styled from 'styled-components';


import WorkData from '../../mock/workData';


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
  h1 {
    margin: 20px auto;
    font-size: 2rem;
    font-weight: 600;
    line-height: 55px;
    letter-spacing: 0em;
    text-align: center;
    color: ${(props) => props.theme.palette.singleWorkTitle};
  }
  .myImg {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    margin-bottom: 20px;
  }
`;

const SingleWork = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [myData, setMyData] = useState(null);
  const data = WorkData();

  useEffect(() => {
    setTimeout(() => {
      const selectedData = data.find((item) => item.id === Number(id));
      setMyData(selectedData);
      setLoading(false);
    }, 1000);
  }, [id, data]);

  return (
    <>
      {loading ? (
        <FullHeight>
          <Spinner />
        </FullHeight>
      ) : (
        <Style>
          <Container>
            <h1>{myData?.title}</h1>
            <img className='myImg' src={myData?.cover} alt="" />
            {myData?.img2 ? <img className='myImg' src={myData?.img2} alt="" /> : ''}
            {myData?.img3 ? <img className='myImg' src={myData?.img3} alt="" /> : ''}
            {myData?.img4 ? <img className='myImg' src={myData?.img4} alt="" /> : ''}
            {myData?.img5 ? <img className='myImg' src={myData?.img5} alt="" /> : ''}
            {myData?.img6 ? <img className='myImg' src={myData?.img6} alt="" /> : ''}
            {myData?.img7 ? <img className='myImg' src={myData?.img7} alt="" /> : ''}
            {myData?.img8 ? <img className='myImg' src={myData?.img8} alt="" /> : ''}
            {myData?.img9 ? <img className='myImg' src={myData?.img9} alt="" /> : ''}
          </Container>
        </Style>
      )}
    </>

  );
};

export default SingleWork;
