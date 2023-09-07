import styled from "styled-components";

export const CardStyle = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 500px;
  margin: 30px auto;
  display: flex;
  align-items: end;
  justify-content: center;
  position: relative;
  @media (max-width: 480px) {
    height: 600px;
  }
`;

export const Content = styled.div`
  text-align: center;
  padding: 50px;
  flex: 1;

  @media (max-width: 480px) {
    padding: 5px;
    bottom: 35px;
  }
  h4 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 55px;
    letter-spacing: 0em;
    color: #ffffff;
    text-align:center;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
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
.download{
  a{
    text-decoration:underline;
    color:#3099ca;
  }
}
ol{
  color:#fff;
  margin: auto;
  width: fit-content;
  li{
    text-align: start;
  }
}
`;
