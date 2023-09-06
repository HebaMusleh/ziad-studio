import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

const spinUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const fade = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const SpinnerStyle = styled.div`
  position: fixed;
  top: 40%;
  left: 40%;
  margin:auto;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 20%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000000000000;
  color: ${(props) => props.theme.palette.iconColor};
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
  animation: ${spinUpDown} 2s linear infinite, ${fade} 2s ease-in-out infinite alternate;
`;

const Spinner = () => {
  const { t } = useTranslation();
  return (
    <SpinnerStyle>
      <div>{t('z')}</div>
    </SpinnerStyle>
  );
};

export default Spinner;
