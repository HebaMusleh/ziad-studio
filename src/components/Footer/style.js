import styled from "styled-components";

export const FooterStyle = styled.div`
  text-align: center;
  background: #1f81b0;
  color: #fff;
  padding: 30px 0;
  .top_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 480px) {
      justify-content: center;
      font-size: 16px;
    }
  }
  .logo {
    width: 250px;
    img {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 480px) {
      display: none;
    }
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;
    @media (max-width: 480px) {
      align-items: center;
    }
    ul {
      display: flex;
      list-style: none;
      gap: 50px;
      font-size: 20px;
      padding: 40px 0;
      @media (max-width: 480px) {
        padding: 20px 0;
      }
      li {
        cursor: pointer;
      }
      @media (max-width: 480px) {
        font-size: 16px;
      }
    }
    a {
      color: #fff;
    }
  }
  .socials {
    padding: 30px 0;
    @media (max-width: 480px) {
      padding: 20px 0;
    }
    ul {
      list-style: none;
      display: flex;
      gap: 60px;
      justify-content: center;
      align-items: center;
      a {
        font-size: 25px;
        color: #fff;
        align-items: center;
        @media (max-width: 480px) {
          font-size: 16px;
        }
      }
    }
  }
  .copyright {
    font-size: 20px;
    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
