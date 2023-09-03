import styled from "styled-components";

export const USStyle = styled.div`
  padding: 10% 0;
  .us-content {
    position: relative;
    box-shadow: 0px 4px 50px 0px ${(props) => props.theme.palette.shadow};
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
    animation: updown 3s linear infinite;

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

  @keyframes updown {
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
        100% {
            transform: translateY(-20px);
        }
    }
`;
