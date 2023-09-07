import React from 'react'

import { Style } from './style';

const Card = ({icon,desc,bg}) => {
    return (
        <Style bg={bg}>
            <div className="wrapper-icons">
            <div className="icons">
                <img src={icon} alt="" />
            </div>
            </div>
            <div className="description">
                <p>{desc}</p>
            </div>
        </Style>
    )
}

export default Card