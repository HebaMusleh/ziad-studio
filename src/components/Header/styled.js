import styled from "styled-components";

export const HeaderStyle = styled.div`
  background: ${(props) => props.theme.palette.heroBackground};
  transition: 0.8s;
  padding:20px 0;
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
    width: 150px;
    cursor: pointer;
    @media (max-width: 480px) {
      width: 100px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
