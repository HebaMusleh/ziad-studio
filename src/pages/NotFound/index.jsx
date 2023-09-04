import React from 'react'
import img from '../../assets/notFound.gif';
import FullHeight from '../../components/FullHeight';
import { Container } from '../../global/component';

const NotFound = () => {
  return (
    <FullHeight>
        <Container>
        <img src={img} alt="img" width={"100%"}/>
        </Container>
    </FullHeight>
  )
}

export default NotFound