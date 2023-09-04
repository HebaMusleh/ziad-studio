import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.palette.packagesBackground};
  box-shadow: 0px 4px 25px 0px #82C8DC66;
  border-radius: 48px;
  flex-basis: 30%;
  padding: 40px;
  height: fit-content;
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
      color: ${(props) => props.theme.palette.TitleColor};
      margin-bottom: 20px;
    }
  }
  .description {
    h5 {
      font-size: 20px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.secondaryTitle};
    }
    p {
      font-family: Baloo Bhaijaan 2;
      font-size: 20px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0em;
      text-align: center;
      color: ${(props) => props.theme.palette.secondText};
    }
  }
  .price {
    h4 {
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 41px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.priceColor};
      margin: 30px 0;
      text-align:center;
    }
  }
  ul {
    padding:40px;
    li {
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: 0em;
      width: fit-content;
      color: #636363;
      text-align: start;
    }
  }
  .edits {
    list-style: none;
    color: ${(props) => props.theme.palette.editColor};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 41.09px;
  }
  .brand{
    color: ${(props) => props.theme.palette.icon6Bg};
  }
`;
