import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  overflow-x:hidden;
  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    /* Adjust properties for screens up to 768px */
    padding: 10px;
  }

  @media (max-width: 480px) {
    /* Adjust properties for screens up to 480px */
    padding: 5px;
  }
`;
