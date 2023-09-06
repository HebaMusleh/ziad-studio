import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { Btn, ModalWrapper } from './style';

import contactImg from '../../assets/contact.svg'
import Input from '../../components/Input';
import { Container } from '../../global/component';

import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

import { useLanguage } from '../../context/directionContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactModal = ({ isOpen, closeModal }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const notify = () => {
    toast.success("Message sent successfully", {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_5no24mx', 'template_z4hh3dt', form.current, 'b3vb2TN3nJiYxxSyE')
      .then((result) => {
        console.log(result.text);
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          message: ''
        });
        notify();
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Something went wrong');
      })
      .finally(() => {
        setLoading(false);
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
              <ToastContainer />
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
                  <Input Label="FullName" Type="text" name="user_name" onChange={handleChange} value={formData.user_name} />
                  <Input Label="Email" Type="email" name="user_email" onChange={handleChange} value={formData.user_email} />
                  <Input Label="phone" Type="tel" name="user_phone" onChange={handleChange} value={formData.user_phone} />
                  <Input textarea name="message" value={formData.message} onChange={handleChange} />
                  <div className='btns'>
                    <div><Btn type="submit">{loading?" Loading ...":t('send')}</Btn></div>
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
