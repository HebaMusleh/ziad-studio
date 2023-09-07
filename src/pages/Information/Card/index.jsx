import React from 'react';
import { CardStyle } from './style';
import { useTranslation } from 'react-i18next';
import pdf from '../../../assets/download.pdf';

const Card = ({ question, answer, BG, link, answer1, answer2, answer3, answer4, answer5, right }) => {

    const { t } = useTranslation();

    const bgImage = `linear-gradient(180deg, rgba(16, 20, 24, 0) 0%, #101418 100%), url(${BG})`;

    const cardStyle = {
        background: bgImage,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const contentStyle = {
        ...(right ? { right: '25%' } : {}),
    }

    return (
        <CardStyle style={cardStyle}>
            <div className='content' style={contentStyle}>
                <h4>{question}</h4>
                <p>{answer}</p>
                {link ? (
                    <span className='download'>
                        <a
                            href={pdf}
                            download="Brand-identity"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t('download')}
                        </a>
                    </span>
                ) : (
                    ''
                )}
                {answer1 ? (
                    <ol>
                        <li>{answer1}</li>
                        <li>{answer2}</li>
                        <li>{answer3}</li>
                        <li>{answer4}</li>
                        <li>{answer5}</li>
                    </ol>
                ) : (
                    ''
                )}
            </div>
        </CardStyle>
    );
};

export default Card;
