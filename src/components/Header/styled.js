import styled from "styled-components";

export const HeaderStyle = styled.div`

background: ${(props) => props.theme.palette.heroBackground};
transition:.8s;
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
`;
