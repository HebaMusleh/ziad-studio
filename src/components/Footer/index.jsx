import React from 'react'

import facebook from '../../assets/facebook.png'
import insta from '../../assets/instegram.png'
import whats from '../../assets/whats.png'
import styled from 'styled-components'


const FooterStyle = styled.div`
text-align:center;
background-color:${props => props.theme.palette.fontColor};
margin:auto;


ul{
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 1%;
    padding: 5px;
    img{
        width:30px;
    }
}
`

const Footer = () => {
    return (
        <FooterStyle>
            <ul>
                <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
                <li><a href="#"><img src={insta} alt="insta" /></a></li>
                <li><a href="#"><img src={whats} alt="whats" /></a></li>
            </ul>
        </FooterStyle>
    )
}

export default Footer