import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.palette.packagesBackground};
  border-radius: 48px;
  text-align: center;
  flex-basis:30%;
  padding: 30px;
  height:fit-content;
  .image {
    background: ${(props) => props.theme.palette.whiteFonts};
    width: 160px;
    height: 160px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 30px;
  }
  .title {
    h3 {
      font-size: 32px;
      font-weight: 500;
      line-height: 55px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.fontColor};
      margin-bottom: 20px;
    }
  }
  .description {
    p {
      font-family: Baloo Bhaijaan 2;
      font-size: 20px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: center;
      color: ${(props) => props.theme.palette.paragraphColor};
    }
  }
  .price {
    h4 {
      font-size: 24px;
      font-weight: 600;
      line-height: 41px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.titleColor};
      margin: 30px 0;
    }
    button {
      font-size: 24px;
      font-weight: 500;
      line-height: 41px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.fontColor};
      border-radius: 8px;
      border: 1px solid ${(props) => props.theme.palette.fontColor};
      background: ${(props) => props.theme.palette.whiteFonts};
      width: 228px;
      height: 56px;
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme.palette.fontColor};
        color: ${(props) => props.theme.palette.whiteFonts};
      }
    }
  }
`;
