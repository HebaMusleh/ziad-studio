import React from 'react';
import BtnOrder from '../../../../components/BtnOrder';
import { useTranslation } from 'react-i18next';
import { Width } from './style';

const CardMobile = ({ img, title, desc, price, num = 1, options, brand,downList }) => {
    const { t } = useTranslation();

    return (
        <Width>
            <div className="wrapper">
            <div className='image'>
                <img src={img} alt=''/>
            </div>
            <div className='title'>
                <h3>{title}</h3>
            </div>
            <div className='description'>
                <h5>{desc}</h5>
                <ul>
                    <div className='description-list-wrapper'>
                        <div>
                            {options.map((opt, index) => (
                                index < 5 ? <li key={index} className={index >= 9 ? 'extraBold' : index >= 4 ? 'bold' : ''}>{opt}</li> : ""
                            ))}
                        </div>
                        <div>
                            {options.map((opt, index) => (
                                (index >= 6 && index <= 10) && <li key={index} className={index >= 9 ? 'extraBold' : index >= 4 ? 'bold' : ''}>{opt}</li>
                            ))}
                        </div>
                    </div>
                    {downList ? <div className='down-list'>
                        {options.map((opt, index) => (
                            index >= 10 && <li key={index} className={index >= 9 ? 'extraBold' : index >= 4 ? 'bold' : ''}>{opt}</li>
                        ))}
                    </div> : ""}


                    {brand ? <li className='brand'>{t('brandIdentityGuide')}</li> : ''}

                    <li className='edits'>
                        {t('edit')} {num}
                    </li>
                </ul>
            </div>
            <div className='price'>
                <h4>{price}</h4>
                <BtnOrder />
            </div>
            </div>
        </Width>
    );
};

export default CardMobile;