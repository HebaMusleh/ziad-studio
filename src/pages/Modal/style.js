import styled from "styled-components";

export const StyleModal = styled.div`
  background: #00000066;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  .content {
    margin: 10% auto;
    padding: 30px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    width: 90%;
    background: #fff;
    @media (max-width: 768px) {
        flex-direction:column;
      }
  }
  .description {
    flex-basis: 60%;
    text-align: center;
    h1 {
      color: #1f81b0;
      font-size: 1.75rem;
      font-weight: 500;
      line-height: 48px;
      letter-spacing: 0em;
    }
    p {
      color: #646464;
      font-size: 1rem;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
    }
    .img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .form {
    flex-basis: 40%;
    button {
      padding: 10px 70px;
      border-radius: 8px;
      background: #1f81b0;
      border: 1px solid #1f81b0;
      outline: none;
      font-family: Baloo Bhaijaan 2;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      line-height: 34px;
      letter-spacing: 0em;
      color: #fff;
    }
  }
`;
