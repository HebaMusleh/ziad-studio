import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: ${(props) => props.theme.palette.heroBackground};
  transition: 0.8s;
  position: fixed;
  width: 100%;
  z-index: 1;
  @media (max-width: 480px) {
    position: relative;
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
  }
  // .logo {
  //   @media (max-width: 480px) {
  //     width: 30px;
  //   }
  //   img {
  //     width: 100%;
  //     height: 100%;
  //   }
  }
`;
