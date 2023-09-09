import styled from "styled-components";

export const HeroStyle = styled.div`
  background: ${(props) => props.theme.palette.heroBackground};
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height:80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
      height:30vh;;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
