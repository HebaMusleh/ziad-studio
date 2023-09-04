import styled from "styled-components";

const ModalWrapper = styled.div`
  /* Styles for the modal wrapper */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
  .content {
    width: 80%;
    display: flex;
    gap: 20px;
    background: ${props=>props.theme.palette.background};
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    .description {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
      text-align: center;
      @media (max-width: 699px) {
        display: none;
      }
    }
    .form {
      flex-basis: 50%;
      @media (max-width: 699px) {
        flex-basis: 100%;
      }
    }
    h1 {
      font-size: 28px;
      font-weight: 500;
      line-height: 48px;
      letter-spacing: 0em;
      text-align: center;
      color: ${(props) => props.theme.palette.TitleColor};
    }
    p {
      color: ${(props) => props.theme.palette.contactDesc};
    }
    .images {
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60%;
      img {
        width: 100%;
      }
    }
  }
  .btns {
    display: flex;
    justify-content: space-between;
  }
`;
const Btn = styled.button`
  background: #1f81b0;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.25rem;
`;

export { ModalWrapper, Btn };
