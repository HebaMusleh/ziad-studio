import React from 'react'

import logo from '../../assets/logo.png'

import { RiMenu3Fill, RiMenu2Line } from "react-icons/ri";

import { Container } from '../../global/component';
import { headerVariants } from "../../utils/motion";
import { motion } from 'framer-motion';
import { HeaderStyle } from './styled';



const Header = ({ openClick, dir }) => {
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
                        {dir === "rtl" ?
                            <RiMenu3Fill className='icons' onClick={openClick} /> :
                            <RiMenu2Line className='icons' onClick={openClick} />
                        }

                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </motion.div>
            </Container>
        </HeaderStyle>
    )
}

export default Header