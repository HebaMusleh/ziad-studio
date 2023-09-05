import React from 'react'
import { Container } from '../../../global/component'
import FullHeight from '../../FullHeight'

const Error = () => {
  return (
    <>
      <Container>
        <FullHeight>
          <p style={{
            color: "#000", marginTop: "150px",
            textAlign: "center"
          }}>Sth went wrong ,refresh page</p>
        </FullHeight>
      </Container>
    </>
  )
}

export default Error