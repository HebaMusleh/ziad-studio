import styled from "styled-components";

export const HeaderStyle = styled.div`

background: ${(props) => props.theme.palette.heroBackground};
transition:.8s;
position:fixed;
width:100%;
z-index:1;
@media (max-width: 900px) {
  position: relative;
}
  .headers-own-style {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow:hidden;
  }

  .icons {
    font-size: 32px;
    cursor: pointer;
    color: ${(props) => props.theme.palette.primaryHeroColor};
  }
  .logo{
    width:50px;
    height:65px;
    cursor:pointer;
    @media (max-width: 480px) {
      width:30px;
      height:35px;
    }
      img{
        width:100%;
        height: 100%; 
    }
  }
`;