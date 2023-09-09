import styled from "styled-components";

export const USStyle = styled.div`
  .us-content {
    position: relative;
    box-shadow: 0px 4px 50px 0px ${(props) => props.theme.palette.shadow};
    width: 95%;
    border-radius: 16px;
    padding: 10px 20px;
  }
`;
