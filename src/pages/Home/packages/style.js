import styled from "styled-components";

export const H3 = styled.h3`
  font-size: 40px;
  font-weight: 500;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.theme.palette.TitleColor};
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
export const AllCard = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10%;
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
