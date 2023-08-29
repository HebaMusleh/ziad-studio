import styled from "styled-components";

export const USStyle = styled.div`
  padding: 10% 0;
  .us-content {
    position: relative;
    box-shadow: 0px 4px 50px 0px #1f81b01a;
    width: 95%;
    border-radius: 16px;
    padding: 10px 20px;
    margin: 10% auto;
    z-index: 1000;
  }
  .images {
    position: absolute;
    width: 150px;
    left: 2px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right-wrapper {
    position: absolute;
    width: 150px;
    right: -5%;
    bottom: -80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .left-wrapper {
    position: absolute;
    width: 150px;
    left: -2%;
    top: -80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
