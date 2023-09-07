import React from 'react';
import { Wrapper } from './style';
import BtnOrder from '../../../../components/BtnOrder';
import { useTranslation } from 'react-i18next';

const Card = ({ img, title, desc, price, num = 1, options, brand }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="content">
      <div className='image'>
        <img src={img} alt=''/>
      </div>
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <div className='description'>
        <h5>{desc}</h5>
        <ul>
          {options.map((opt, index) => (
            <li key={index} className={index >= 9 ? 'extraBold' : index >= 4 ? 'bold' : ''}>{opt}</li>
          ))}
          {brand ? <li className='brand'>{t('brandIdentityGuide')}</li> : ''}
        </ul>
        <li className='edits'>
          {t('edit')} {num}
        </li>
      </div>
      <div className='price'>
        <h4>{price}</h4>
        <BtnOrder />
      </div>
      </div>
    </Wrapper>
  );
};

export default Card;
