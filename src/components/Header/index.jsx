import React from 'react'

import logo from '../../assets/logo.png';
import darkLogo from '../../assets/darklogo.png';

import { RiMenu3Fill, RiMenu2Line } from "react-icons/ri";

import { Container } from '../../global/component';
import { headerVariants } from "../../utils/motion";
import { motion } from 'framer-motion';
import { HeaderStyle } from './styled';
import { useLanguage } from '../../context/directionContext';



const Header = ({ openClick, theme }) => {
    const { direction } = useLanguage();
    return (
        <HeaderStyle>
            <Container>
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="show"
                    className={`bg-primary paddings headers-own-style`}
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <div className="sidebar">
                        {direction === "rtl" ?
                            <RiMenu3Fill className='icons' onClick={openClick} /> :
                            <RiMenu2Line className='icons' onClick={openClick} />
                        }

                    </div>
                    <div className="logo">
                        <a href="/">
                        {theme === 'dark' ?
                            <img src={darkLogo} alt="logo" />
                            :
                            <img src={logo} alt="logo" />
                        }
                        </a>
                    </div>
                </motion.div>
            </Container>
        </HeaderStyle>
    )
}

export default Header