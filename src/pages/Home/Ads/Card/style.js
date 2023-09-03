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
  .singleIcon {
    color: ${(props) => props.theme.palette.iconColor};
    font-size: 35px;
  }
  .num {
    p {
      font-size: 36px;
      font-weight: 600;
      line-height: 62px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.primaryAds};
    }
  }
  .word {
    p {
      font-size: 24px;
      font-weight: 400;
      line-height: 41px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.secondaryAds};
    }
  }
`;
