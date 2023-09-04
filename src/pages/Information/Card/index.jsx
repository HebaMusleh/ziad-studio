import React from 'react';
import { CardStyle } from './style';

const Card = ({ question, answer, BG }) => {
    const bgImage = `linear-gradient(180deg, rgba(16, 20, 24, 0) 0%, #101418 100%), url(${BG})`;

    const cardStyle = {
        background: bgImage,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    return (
        <CardStyle style={cardStyle}>
            <div className='content'>
                <h4>{question}</h4>
                <p>{answer}</p>
            </div>
        </CardStyle>
    );
};

export default Card;
