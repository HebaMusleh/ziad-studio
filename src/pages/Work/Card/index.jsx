import React from 'react'

import { CardStyle } from './style';

import insta from '../../../assets/insta.png';
import facebook from '../../../assets/face.png';
import whats from '../../../assets/whats.png';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, img, id }) => {
    const navigate = useNavigate();
    return (
        <CardStyle onClick={() => navigate(`/work/${id}`)}>
            <div className="description-section">
                <h1>{title}</h1>
                <p>
                    {description}
                </p>
                <div className="socials">
                    <ul>
                        <li><a href="https://www.instagram.com/_ziadstudio/"><img src={insta} alt="" /></a></li>
                        <li><a href="/#"><img src={facebook} alt="" /></a></li>
                        <li><a href="/#"><img src={whats} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="image-section">
                <img src={img} alt="test" />
            </div>
        </CardStyle>
    )
}

export default Card