import React from 'react'
import styled from 'styled-components'

const TitleStyle = styled.div`
text-align: center;
margin:5% auto;
h2{
    font-size: 40px;
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 0em;
    color:${props => props.theme.palette.primarySecondSection};
    @media (max-width: 480px) {
        font-size: 30px;
      }
}
p{
    font-family: Rawy-Thin,sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color:${props => props.theme.palette.secondarySecondSection};
    width:60%;
    margin: auto;
    @media (max-width: 480px) {
        width:100%;
        font-size:16px;
      }
}
`
const Title = ({ title, desc }) => {
    return (
        <TitleStyle>
            <h2>{title}</h2>
            <p>{desc}</p>
        </TitleStyle>
    )
}

export default Title