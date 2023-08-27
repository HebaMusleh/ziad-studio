import React from 'react'

import logo from '../../assets/logo.png'

import { RiMenu3Fill } from "react-icons/ri";


import styled from 'styled-components';
import { Container } from '../../global/component';


const HeaderStyle = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
.icons{
    font-size:32px;
}
`
const Header = () => {
    return (
        <Container>
            <HeaderStyle>
                <div className="sidebar">
                    <RiMenu3Fill className='icons' />
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </HeaderStyle>
        </Container>
    )
}

export default Header