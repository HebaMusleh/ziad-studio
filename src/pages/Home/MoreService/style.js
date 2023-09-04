import styled from "styled-components";

export const ServiceStyle = styled.div`
  background: ${(props) => props.theme.palette.BgService};
  text-align: center;
  padding-bottom: 5%;
  h2 {
    font-size: 40px;
    font-weight: 500;
    line-height: 68px;
    letter-spacing: 0em;
    color: ${(props) => props.theme.palette.primarySecondSection};
    margin: 30px 0;
  }
  .cards {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  .singleCard{
    flex-basis:48%;
    @media (max-width: 768px) {
      flex-basis:95%;
    }
  }
`;
