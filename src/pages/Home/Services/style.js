import styled from "styled-components";

export const ServicesStyle = styled.div`
  background: ${(props) => props.theme.palette.BgService};
  color:${(props) => props.theme.palette.primarySecondSection};
  text-align: center;
  padding: 5% 0;
  justify-content: space-between;
  .content-service {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .images {
      width: 400px;
      img {
        width: 100%;
        height: 100%;
      }
      @media (max-width: 480px) {
        display: none;
      }
    }
    .title {
      h3 {
        font-size: 24px;
        font-weight: 500;
        font-family: Rawy-Bold;
        margin: 20px 0;
        padding: 0;
        text-align: start;
        @media (max-width: 480px) {
          font-size: 20px;
        }
      }
    }
    .body {
      text-align: start;
      line-height: 2;
      font-size: 20px;
      @media (max-width: 480px) {
        font-size: 16px;
      }
      ul {
        list-style: none;
      }
    }
  }
`;
