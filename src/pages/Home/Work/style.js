import styled from "styled-components";

export const WorkStyle = styled.div`
  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 1085px) {
      justify-content: center;
      gap: 3%;
    }
  }
  }
  .moreBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:85px;
  }
`;
export const MoreBtn = styled.button`
  width: 383px;
  height: 80.39642333984375px;
  border-radius: 16px;
  border: 1px solid #b9b9b9;
  color: #6c6c6c;
  background: transparent;
  font-size: 24px;
  font-weight: 800;
  line-height: 41px;
  letter-spacing: 0em;
  cursor: pointer;
  &:hover {
    background: #b9b9b9;
    color: #fff;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    width: 100%;
    height: 50px;
  }
`;
