import styled from "styled-components";

export const SupporterStyle = styled.div`
  margin: 10% 0;
  .wrapper {
    box-shadow: 0px 4px 50px 0px ${(props) => props.theme.palette.shadow};
    padding: 10px 50px 50px;
    border-radius: 50px;
    overflow: hidden;
  }
  @keyframes slider {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  
  .logos {
    overflow: hidden;
    padding: 60px 0;
    white-space: nowrap;
    position: relative;
    direction:ltr;
  }
  
  .logos:before,
  .logos:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }
  
  .logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), transparent);
  }
  
  .logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), transparent);
  }
  
  .logos:hover .logos-slide {
    animation-play-state: paused;
  }
  
  .logos-slide {
    display: inline-block;
    animation: 35s slider infinite linear;
    direction:ltr;
  }
  
  .logos-slide img {
    height: 50px;
    margin: 0 40px;
  }
  img{
    &:hover{
      scale:1.1;
      cursor:pointer;
    }
  }
`;
