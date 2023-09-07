import React from 'react'

import { Style } from './style';

const Card = ({ icon, desc, bg, id }) => {
    return (
        <Style bg={bg}>
            <div className="wrapper-icons">
                <div className="icons">
                    <img src={icon} alt="" />
                </div>
            </div>
            <div className="description">
                <p> {id} -
                    {desc}</p>
            </div>
        </Style>
    )
}

export default Card