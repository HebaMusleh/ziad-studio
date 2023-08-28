import React from 'react'

import logo from '../../assets/logo.png'

import { RiMenu3Fill, RiMenu2Line } from "react-icons/ri";


import styled from 'styled-components';
import { Container } from '../../global/component';


const HeaderStyle = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
.icons{
    font-size:32px;
    cursor:pointer;
}
`
const Header = ({ openClick, dir }) => {
    return (
        <Container>
            <HeaderStyle>
                <div className="sidebar">
                    {dir == "rtl" ?
                        <RiMenu3Fill className='icons' onClick={openClick} /> :
                        <RiMenu2Line className='icons' onClick={openClick} />
                    }

                </div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </HeaderStyle>
        </Container>
    )
}

export default Header