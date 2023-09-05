import styled from "styled-components";

export const CardStyle = styled.div`
  text-align: center;
  background: ${(props) => props.theme.palette.adsCardBG};
  width: 265px;
  height: 232px;
  border: 3px solid ${(props) => props.theme.palette.background};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 105px;
    height: 105px;
  }
  .singleIcon {
    color: ${(props) => props.theme.palette.iconColor};
    font-size: 35px;
    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
  .num {
    p {
      font-size: 36px;
      font-weight: 600;
      line-height: 62px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.primaryAds};
      @media (max-width: 480px) {
        font-size: 20px;
        line-height: 1;
      }
    }
  }
  .word {
    p {
      font-size: 24px;
      font-weight: 400;
      line-height: 41px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.secondaryAds};
      @media (max-width: 480px) {
        font-size: 13px;
        line-height: 1;
      }
    }
  }
`;
