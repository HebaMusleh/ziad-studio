import styled from "styled-components";

export const HeaderStyle = styled.div`

background: ${(props) => props.theme.palette.heroBackground};
  .headers-own-style {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .icons {
    font-size: 32px;
    cursor: pointer;
  }
`;
