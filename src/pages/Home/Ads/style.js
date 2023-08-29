import styled from "styled-components";

export const AdsStyle = styled.div`
  background: #acdbe380;
  padding:20px 0;
  .card-container{
    display:flex;
    justify-content:space-between;
    gap:20px;
    align-items:center;
    @media (max-width: 768px) {
        flex-wrap:wrap;
        justify-content:center;
        gap:20px;
      }
  }
`;
