import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Btn, ModalWrapper } from './style';
import contactImg from '../../assets/contact.png'
import Input from '../../components/Input';
import { useTranslation } from 'react-i18next';
import { Container } from '../../global/component';


const ContactModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const { t } = useTranslation();

  return (
    <>
      <Container>
        {isOpen && (
          <ModalWrapper>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              className='content'
            >
              <div className='description'>
                <div> <h1>{t('contactTitle')}</h1></div>
                <div><p>{t('contactDescription2')}</p>
                  <p>{t('contactDescription1')}</p></div>
                <div className='images'><img src={contactImg} alt="contact" /></div>
              </div>
              <div className='form'>
                <form onSubmit={handleSubmit}>
                  <Input />
                  <Input />
                  <Input />
                  <Input />
                  <div className='btns'>
                    <div><Btn onClick={closeModal} type='button'>{t('close')}</Btn></div>
                    <div><Btn type="submit">{t('send')}</Btn></div>
                  </div>
                </form>
              </div>
            </motion.div>
          </ModalWrapper>
        )}
      </Container>
    </>
  );
};

export default ContactModal;
