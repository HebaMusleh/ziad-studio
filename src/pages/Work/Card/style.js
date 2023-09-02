import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  gap: 50px;
  background: #f9f9f9;
  border-radius: 8px;
  padding: 10px;
  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .description-section {
    flex-basis: 50%;
    text-align: center;
    /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    flex-basis: 100%;
    display:none;
  }
    h1 {
      color: #002b47;
      font-family: Baloo Bhaijaan 2;
      font-size: 2rem;
      font-weight: 600;
      line-height: 55px;
      letter-spacing: 0em;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: center;
      color: #646464;
    }
  }
  .image-section {
    flex-basis: 50%;
    @media (max-width: 768px) {
        flex-basis: 100%;
      }
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2%;
    margin-top: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
