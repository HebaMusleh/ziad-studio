import React from 'react'

import { StyleModal } from './style';

import img from '../../assets/contact.png';
import { useTranslation } from 'react-i18next';
import Input from '../../components/Input';
import { Container } from '../../global/component';

const Modal = () => {
    const { t } = useTranslation()
    return (
        <StyleModal>
          <Container>
          <section className="content">
                <div className='description'>
                    <h1>{t('contactTitle')}</h1>
                    <p>{t('contactDescription2')}</p>
                    <p>{t('contactDescription1')}</p>
                    <div className="img">
                        <img src={img} alt="contact img" />
                    </div>
                </div>
                <div className="form">
                    <form>
                        <Input />
                        <Input />
                        <Input />
                        <Input textarea />
                        <button>ارسال</button>
                    </form>
                </div>
            </section>
          </Container>
        </StyleModal>
    )
}

export default Modal