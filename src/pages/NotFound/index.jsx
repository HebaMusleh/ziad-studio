import React from 'react'
import img from '../../assets/notFound.gif';
import FullHeight from '../../components/FullHeight';
import { Container } from '../../global/component';

const NotFound = () => {
    return (
        <div>
            <Container>
                <img src={img} alt="img" width={"100%"} />
            </Container>
        </div>
    )
}

export default NotFound