import styled from "styled-components";

export const USStyle = styled.div`
  padding: 5% 0;
  position: relative;
  overflow: hidden;
  .us-content {
    box-shadow: 0px 4px 50px 0px ${(props) => props.theme.palette.shadow};
    background: ${(props) => props.theme.palette.background};;
    padding: 10px 50px 50px;
    border-radius: 50px;
    overflow: hidden;
    z-index: 10;
  }
  .pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    @media (max-width: 480px) {
      height:100%;
    }
    
    z-index: -10;
    animation: slide 3s linear infinite alternate;
    img {
      width: 100%;
      height:100%;
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(50px);
    }
  }
`;
