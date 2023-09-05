import styled from "styled-components";

export const AdsStyle = styled.div`
  background: ${(props) => props.theme.palette.adsBg};
  padding: 20px 0;
  .card-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    @media (max-width: 480px) {
      justify-content: space-around;
    }
  }
`;
