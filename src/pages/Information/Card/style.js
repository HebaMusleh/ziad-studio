import styled from "styled-components";

export const CardStyle = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 500px;
  margin: 30px auto;
  position: relative;
  @media (max-width: 480px) {
    height: 900px;
  }
  .content {
    position: absolute;
    bottom: 0;
    text-align: center;
    padding: 50px;
    h4 {
      font-size: 2rem;
      font-weight: 600;
      line-height: 55px;
      letter-spacing: 0em;
      color: #ffffff;
    }
    p {
      font-family: Baloo Bhaijaan 2;
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: center;
      color: #fff;
    }
  }
  .download {
    color: #00f;
    text-decoration: underline;
    cursor: pointer;
  }
`;
