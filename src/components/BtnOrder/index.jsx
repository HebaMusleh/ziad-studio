import React from 'react'
import styled from 'styled-components'


const BtnStyle = styled.button`
    font-size: 24px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: 0em;
    color: ${(props) => props.theme.palette.fontColor};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.palette.fontColor};
    background: ${(props) => props.theme.palette.whiteFonts};
    width: 228px;
    height: 56px;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.palette.fontColor};
      color: ${(props) => props.theme.palette.whiteFonts};
    }
`
const BtnOrder = () => {
    return (
        <BtnStyle>
            اطلب الان
        </BtnStyle>
    )
}

export default BtnOrder