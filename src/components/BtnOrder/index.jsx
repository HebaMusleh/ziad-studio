import React,{useState} from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import ContactModal from '../../pages/ContactModal'


const BtnStyle = styled.button`
    font-size: 24px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: 0em;
    color: ${(props) => props.theme.palette.TitleColor};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.palette.TitleColor};
    background: ${(props) => props.theme.palette.background};
    width: 228px;
    height: 56px;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.palette.TitleColor};
      color: ${(props) => props.theme.palette.background};
    }
`
const BtnOrder = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    return (
            <>
        <BtnStyle onClick={()=>openModal()}>
            {t("order")}
        </BtnStyle>
        <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
            </>
    )
}

export default BtnOrder