import styled from "styled-components";
import bgImage from "../../../assets/BG1.png";

export const CardStyle = styled.div`
  background: linear-gradient(180deg, rgba(16, 20, 24, 0) 0%, #101418 100%),
    url(${bgImage});
  border-radius: 16px;

  width: 100%;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 30px auto;
  position: relative;
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
`;
