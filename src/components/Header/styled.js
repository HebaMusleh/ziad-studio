import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: ${(props) => props.theme.palette.heroBackground};
  transition: 0.8s;
  position: fixed;
  width: 100%;
  z-index: 1;
  @media (max-width: 480px) {
    position: relative;
    padding:10px;
  }
  .headers-own-style {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icons {
    font-size: 32px;
    cursor: pointer;
    color: ${(props) => props.theme.palette.primaryHeroColor};
    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
  .logo {
    img{
      width:100%;
      height:100%;
    }
    @media (max-width: 480px) {
      width: 25px;
    }
  }
`;
