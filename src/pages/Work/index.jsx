import React, { useState, useEffect } from 'react';

import { Container } from '../../global/component';


import Hero from './Hero';
import Card from './Card';
import Spinner from './../../components/Spinner/index';
import FullHeight from '../../components/FullHeight';

import WorkData from '../../mock/workData';
import Footer from '../../components/Footer';
import ContactModal from '../ContactModal';
import { useModal } from '../../context/modalContext';


const Work = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const fetchedData = WorkData();
    const { isModalOpen, closeModal } = useModal();

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
                <>

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
                    <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
                    <Footer />
                </>
            )}

        </>
    );
};

export default Work;
