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
  .pagination{
    button{
        width:30px;
        height:30px;
        border-radius:50%;
        border:1px solid #76B4C3;
        color:#76B4C3;
        background:#fff;
        margin:10px;
        cursor:pointer;
        &:disabled{
            border:1px solid #76B4C3;
            color:#fff;
            background:#76B4C3;
        }
    }
  }
`;

const Work = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Initialize current page to 1
    const itemsPerPage = 5; // Number of items to display per page
    const fetchedData = WorkData();

    useEffect(() => {
        setTimeout(() => {
            setData(fetchedData);
            setLoading(false);
        }, 1000);
    }, [fetchedData]);

    // Calculate the range of items to display for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    // Handle next and previous page buttons
    const nextPage = () => {
        if (currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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
                        {currentData.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                img={item.img1}
                                id={index + 1}
                            />
                        ))}
                        <div className='pagination'>
                        <button
                                onClick={nextPage}
                                disabled={
                                    currentPage === Math.ceil(data.length / itemsPerPage)
                                }
                            >
                                2
                            </button>
                            <button onClick={prevPage} disabled={currentPage === 1}>
                                1
                            </button>
                        </div>
                    </Container>
                </Style>
            )}
        </>
    );
};

export default Work;
