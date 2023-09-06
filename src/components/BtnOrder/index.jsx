import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import ContactModal from '../../pages/ContactModal'
import { useModal } from '../../context/modalContext'


const BtnStyle = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: auto;
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
    @media (max-width: 768px) {
      font-size: 20px;
    }
    &:hover {
      background: ${(props) => props.theme.palette.TitleColor};
      color: ${(props) => props.theme.palette.background};
    }
`
const BtnOrder = () => {
  const { t } = useTranslation();
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <BtnStyle onClick={() => openModal()}>
        {t("order")}
      </BtnStyle>
    </>
  )
}

export default BtnOrder