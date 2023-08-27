import React from 'react'
import styled from 'styled-components'

const TitleStyle = styled.div`
text-align: center;
margin:10% auto;

h2{
    font-size: 40px;
    font-weight: 600;
    line-height: 68px;
    letter-spacing: 0em;
    color:${props => props.theme.palette.titleColor};
}
p{
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color:${props => props.theme.palette.paragraphColor};
    width:60%;
    margin: auto;
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