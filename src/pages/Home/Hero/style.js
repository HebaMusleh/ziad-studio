import styled from "styled-components";

export const HeroStyle = styled.div`
  background: ${(props) => props.theme.palette.heroBackground};
  padding: 100px 0;
  position:relative;
  overflow-x:hidden;
  overflow-y:hidden;
  z-index:100;
  .container-hero {
    display: flex;
    align-items: center;
    gap: 4%;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      padding: 5px;
    }

    .left-side {
      flex-basis: 30%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      @media (max-width: 768px) {
        width: 50%;
      }

      @media (max-width: 480px) {
        width: 50%;
      }
    }
    .pincel {
      position: absolute;
      top: 20px;
      left: 10%;
      width: 80%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right-side {
      flex-basis:70%;
      z-index: 100;
      h1 {
        font-size: 	3rem;
        font-weight: 500;
        line-height: 82px;
        letter-spacing: 0em;
        color: ${(props) => props.theme.palette.TitleColor};
        @media (max-width: 480px) {
          text-align:center;
          font-size: 30px;
          line-height: 1.6;
          z-index:200;
        }
        span {
          color: ${(props) => props.theme.palette.primaryHeroColor};
          @media (max-width: 768px) {
            font-size: 28px;
          }
        }
        @media (max-width: 480px) {
          text-align:center;
        }
      }
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;
        color: ${(props) => props.theme.palette.secondaryColor};
        @media (max-width: 480px) {
          text-align:center;
        }
      }
      button {
        width: 282px;
        height: 56px;
        border-radius: 8px;
        background: ${(props) => props.theme.palette.TitleColor};
        font-size: 24px;
        font-weight: 600;
        line-height: 41px;
        letter-spacing: 0em;
        text-align: center;
        color: ${(props) => props.theme.palette.white};
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.palette.TitleColor};
        margin-top: 5%;
        &:hover {
          background: ${(props) => props.theme.palette.BgService};
          border: none;
          outline: none;
        }
        @media (max-width: 480px) {
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
        }
      }
    }
  }

  .cloud {
    position: absolute;
    top: -10px;
    animation: moveCloud 20s linear infinite;
    overflow-x: hidden;
    overflow-x:hidden;
  }

  @keyframes moveCloud {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(70vw); /* Move to the right of the viewport */
    }
  }

`;
