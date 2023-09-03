import styled from 'styled-components'

export const SupporterStyle = styled.div`
margin:10% 0;
.swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
.wrapper{
    box-shadow: 0px 4px 50px 0px ${(props) => props.theme.palette.shadow};;
    padding:10px 50px 50px;
    border-radius:50px;
}
.scroll{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:100px;
    @media (max-width: 768px) {
        flex-direction:column;
    }
}
.imgBox{
    img{
        width:100%;
        height:100%;
    @media (max-width: 768px) {
          max-width: 100%;
        }
      }
}
.parallax {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
  }

  .wrapper {
    width: 100%;
    overflow: hidden;
  }
  
  .scroll {
    overflow-x: scroll; /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent line breaks */
    animation: scrollAnimation 10s linear infinite; /* Adjust the duration as needed */
  }
  
  .imgContainer {
    display: inline-block;
  }
  
  @keyframes scrollAnimation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  
`