import React from 'react';
import pattern from '../../../assets/pattern.png';

import { Container } from '../../../global/component';
import Title from '../../../components/Title';

import { USStyle } from './style';
import { useTranslation } from 'react-i18next';


const US = () => {
  const { t } = useTranslation();
  return (
    <USStyle>
      <div className="pattern">
        <img src={pattern} alt="pattern" />
      </div>
      <Container>
        <div className='content'>
          <Title title={t('AboutTitle')} />
          <p>{t('About')}</p>
        </div>
      </Container>
    </USStyle>
  );
}

export default US;
