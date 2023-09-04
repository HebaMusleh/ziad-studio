import React,{useState} from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { StyleTitle } from './style';
import ContactModal from '../../pages/ContactModal';

const TitleHero = ({ title, desc, btn, t }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
        <StyleTitle>
            <h1 className='title'>{title}</h1>
            <p className='desc'>{desc}</p>
            {btn 
            ? <>
            <button onClick={()=>openModal()} className='contactBtn'>{t('contactUS')}<AiOutlinePhone /></button>
             <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
            </> : ''}
        </StyleTitle>
    );
};

export default TitleHero;
