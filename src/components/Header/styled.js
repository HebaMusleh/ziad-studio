import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: ${(props) => props.theme.palette.heroBackground};
  transition: 0.8s;
  position: fixed;
  width: 100%;
  z-index: 10;
  padding:20px 0;
  @media (max-width: 900px) {
    position: relative;
  }
  .headers-own-style {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }

  .icons {
    font-size: 32px;
    cursor: pointer;
    color: ${(props) => props.theme.palette.primaryHeroColor};
  }
  .logo {
    width: 220px;
    cursor: pointer;
    @media (max-width: 480px) {
      width: 150px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
