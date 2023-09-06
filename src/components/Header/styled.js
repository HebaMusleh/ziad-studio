import styled from "styled-components";

export const HeaderStyle = styled.div`

background: ${(props) => props.theme.palette.heroBackground};
transition:.8s;
position:fixed;
width:100%;
z-index:1;
@media (max-width: 480px) {
  position: relative;
}
  .headers-own-style {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    cursor:pointer;
  }

  .icons {
    font-size: 32px;
    cursor: pointer;
    color: ${(props) => props.theme.palette.primaryHeroColor};
  }
`;
