import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.palette.packagesBackground};
  box-shadow: 0px 4px 25px 0px #82c8dc66;
  border-radius: 48px;
  flex-basis: 30%;
  padding: 40px;
  height: fit-content;
  display:flex;
  align-items:center;
  justify-content:center;
  .image {
    background: ${(props) => props.theme.palette.whiteFonts};
    width: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 30px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 480px) {
      width: 50px;
    }
  }
  .title {
    h3 {
      font-size: 32px;
      font-weight: 500;
      line-height: 55px;
      letter-spacing: 0em;
      color: ${(props) => props.theme.palette.TitleColor};
      margin-bottom: 20px;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 27px;
      }
      @media (max-width: 480px) {
        font-size: 20px;
      }
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
      text-align: center;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
  ul {
    padding: 40px;
    padding-bottom:20px;
    li {
      font-size: 1rem;
      font-weight: 500;
      line-height: 34px;
      letter-spacing: 0em;
      width: fit-content;
      color: #636363;
      text-align: start;
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
    .bold {
      font-weight: bold;
      color: ${(props) => props.theme.palette.bold};
    }
    .extraBold {
      font-weight: bold;
      color: ${(props) => props.theme.palette.extrabold};
    }
  }
  .edits {
    list-style: none;
    padding-bottom:20px;
    color: ${(props) => props.theme.palette.editColor};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 41.09px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  .brand {
    color: ${(props) => props.theme.palette.icon6Bg};
  }
`;
