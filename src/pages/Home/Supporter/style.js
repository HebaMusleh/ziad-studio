import styled from "styled-components";

export const SupporterStyle = styled.div`
  margin: 10% 0;
  .wrapper {
    box-shadow: 0px 4px 50px 0px ${(props) => props.theme.palette.shadow};
    padding: 10px 50px 50px;
    border-radius: 50px;
    overflow: hidden;
  }

  .imgBox {
    display: inline-block;
    width: 100%; /* Adjust the width as needed */
    transition: transform 1s linear;
  }

  .mySwiper {
    padding:20px;
    width: 100%;
    display: flex;
    align-items:center;
    transition: transform 1s linear;
    direction:ltr;
  }
`;
