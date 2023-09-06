import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 50%;
  background: ${(props) => props.theme.palette.background};
  border-radius: 16px;
  padding: 5%;
  height: 700px;
  @media (max-width: 768px) {
    flex-basis: 88%;
    height: 500px;
  }
  @media (max-width: 480px) {
    justify-content: center;
    flex-basis: 88%;
    height: 600px;
  }
  .images {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: ${(props) => props.theme.palette.iconServiceBG};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    @media (max-width: 480px) {
      width: 90px;
      height: 90px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .singleImg {
      width: 100px;
      @media (max-width: 480px) {
        width: 60px;
        height: 60px;
      }
    }
  }
  .title {
    h3 {
      font-size: 28px;
      font-weight: 500;
      line-height: 48px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.moreServiceTitle};
      margin-bottom: 2%;
      @media (max-width: 480px) {
        font-size: 20px;
      }
    }
  }
  .desc {
    .line {
      display: flex;
      gap: 10px;
      margin-bottom: 2%;
      p {
        font-size: 20px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 0em;
        color: ${(props) => props.theme.palette.secondaryServiceColor};
        text-align: start;
        @media (max-width: 480px) {
          font-size: 16px;
        }
      }
    }
  }

  .icons {
    color: #62d181;
    font-size: 20px;
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  .btn {
    margin-bottom: 12%;
    text-align: start;
  }
`;
