import React from 'react';
import { CardStyle } from './style';
import { useTranslation } from 'react-i18next';
import pdf from '../../../assets/download.pdf'

const Card = ({ question, answer, BG, link }) => {

    const { t } = useTranslation();

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
            </div>
        </CardStyle>
    );
};

export default Card;
