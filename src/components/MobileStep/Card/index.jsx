import React from 'react'
import icon from '../../../assets/icon.svg';
const Card = () => {
    return (
        <Style>
            <div className="icons">
                <img src={icon} alt="" />
            </div>
            <div className="description">
                <p>Meeting and gathering more information about your business activity and your competitive advantage.</p>
            </div>
        </Style>
    )
}

export default Card