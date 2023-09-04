import React from 'react';
import { CardStyle } from './style';
import { useTranslation } from 'react-i18next';

const Card = ({ question, answer, BG, link }) => {

    const {t} = useTranslation();

    const bgImage = `linear-gradient(180deg, rgba(16, 20, 24, 0) 0%, #101418 100%), url(${BG})`;

    const cardStyle = {
        background: bgImage,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const pdfFilePath = '../../../assets/download.pdf';

    const handleDownloadClick = () => {
        const a = document.createElement('a');
        a.href = pdfFilePath;
        a.download = 'otom-brand-identity-.pdf'; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <CardStyle style={cardStyle}>
            <div className='content'>
                <h4>{question}</h4>
                <p>{answer}</p>
                {link ? (
                    <span onClick={handleDownloadClick} className='download'>
                        {t('download')}
                    </span>
                ) : (
                    ''
                )}
            </div>
        </CardStyle>
    );
};

export default Card;
