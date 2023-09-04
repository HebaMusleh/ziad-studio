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
    z-index: 9;
    @media (max-width: 768px) {
      overflow: hidden;
    }
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
    @media (max-width: 768px) {
      left: -30px;
      top: -20px;
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
    @media (max-width: 768px) {
      display:none;
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
    @media (max-width: 768px) {
      display:none;
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
