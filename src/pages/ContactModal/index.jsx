import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Btn, ModalWrapper } from './style';
import contactImg from '../../assets/contact.png'
import Input from '../../components/Input';
import { useTranslation } from 'react-i18next';
import { Container } from '../../global/component';
import { IoClose } from 'react-icons/io5';
import { useLanguage } from '../../context/directionContext';
import emailjs from '@emailjs/browser';


const ContactModal = ({ isOpen, closeModal }) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    emailjs.sendForm('service_5no24mx', 'template_z4hh3dt', form.current, 'b3vb2TN3nJiYxxSyE')
      .then((result) => {
        console.log(result.text);
        console.log("msg sent successfully")
      }, (error) => {
        console.log(error.text);
        console.log("something went wrong ")
      });
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const { t } = useTranslation();
  const { direction } = useLanguage();
  console.log(direction);

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
                <div className="closeIcon" dir={direction}>
                  <IoClose onClick={closeModal} />
                </div>
                <form onSubmit={handleSubmit} ref={form}>
                  <Input Label="FullName" Type="text" name="user_name" />
                  <Input Label="Email" Type="email" name="user_email" />
                  <Input Label="phone" Type="tel" name="user_phone" />
                  <Input textarea name="message" />
                  <div className='btns'>
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
