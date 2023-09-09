import styled from "styled-components";

export const WorkStyle = styled.div`
  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y:hidden;
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
  padding: 10px;
  width: 30%;
  border-radius: 16px;
  border: 1px solid #b9b9b9;
  color: #6c6c6c;
  background: transparent;
  font-size: 20px;
  font-weight: 600;
  line-height: 41px;
  letter-spacing: 0em;
  cursor: pointer;
  font-family: Rawy-Thin,sans-serif;
  @media (max-width: 480px) {
    font-size: 16px;
    width: 100%;
    padding: 20px 10px;
  }
  &:hover {
    background: #b9b9b9;
    color: #fff;
  }
`;
