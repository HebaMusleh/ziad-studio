import React from 'react'
import { Container } from '../../global/component';
import FullHeight from '../../components/FullHeight';

const NotFound = () => {
    return (
        <div>
            <Container>
                <FullHeight>
                    <p style={{color:"#000",marginTop: "150px",
    textAlign: "center"}}>Error -404 - Page not Found</p>
                </FullHeight>
            </Container>
        </div>
    )
}

export default NotFound