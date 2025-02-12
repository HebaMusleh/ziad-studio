import React, { useState, useEffect } from 'react';

import { Container } from '../../global/component';
import styled from 'styled-components';


import Hero from './Hero';
import Card from './Card';
import Spinner from './../../components/Spinner/index';
import FullHeight from '../../components/FullHeight';

import WorkData from '../../mock/workData';

const Style = styled.div`
  padding-top: 7%;

  @media (max-width: 768px) {
    padding-top: 13%;
  }
  @media (max-width: 480px) {
    padding-top: 0;
  }
`;

const Work = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const fetchedData = WorkData();

    useEffect(() => {
        setTimeout(() => {
            setData(fetchedData);
            setLoading(false);
        }, 1000);
    }, [fetchedData]);

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
                        {data.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                img={item.img1}
                                id={index + 1} />
                        ))}
                    </Container>
                </Style>
            )}

        </>
    );
};

export default Work;
