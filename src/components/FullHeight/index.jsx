import React from 'react'
import  styled  from 'styled-components'

const Style = styled.div`
height:100vh;
`
const FullHeight = ({children}) => {
  return (
    <Style>{children}</Style>
  )
}

export default FullHeight