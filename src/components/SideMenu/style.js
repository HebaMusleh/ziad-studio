import styled from "styled-components";

export const SideStyle = styled.div`
  position: fixed;
  width: 100%;
  ${(props) => (props.dir === "rtl" ? "right: -2000px" : "left: -2000px")};
  z-index: 1000;
  top: 0;
  transition: 0.5s;
  &.show {
    ${(props) => (props.dir === "rtl" ? "right: 0" : "left:0")};
  }
  aside {
    width: 25%;
    background:${(props) => props.theme.palette.background};
    transition:.8s;
    padding: 20px;
    height: 100vh;
    @media (max-width: 768px) {
      width: 65%;
    }
  }
  ul {
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: 0em;
    color: ${(props) => props.theme.palette.colorMenu};
    padding: 10px;
    cursor: pointer;
    a {
      font-size: 20px;
      font-weight: 500;
      line-height: 41px;
      letter-spacing: 0em;
      text-align: center;
      color: ${(props) => props.theme.palette.colorMenu};
    }
    &:hover {
      background: ${(props) => props.theme.palette.hover};
      border-radius: 5px;
    }
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    &:hover {
      background: transparent;
    }
  }
  .closeIcon {
    font-size: 40px;
    color: ${props=>props.theme.palette.closeIcon};
    cursor: pointer;
  }
  .secondSection {
    padding: 20px 0;
  }
  .thirdSection {
    padding: 20px 0;
  }
  .theme-btns {
    display: flex;
    align-items: center;
    &:hover {
      background: transparent;
    }
  }
  .arabic-english-menu {
    display: flex;
  }
  .head-languages {
    flex-direction: column;
    align-items: start;
    ul {
      display: block;
      padding: 5px;
      border-radius: 5px;
      background: ${props=>props.theme.palette.ulBg};
      width: 100%;
      li {
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }
  .arabic-english-menu {
    padding: 10px;
    margin-bottom: 30px;
  }
  .head-languages {
    cursor: pointer;
  }
  .theme-btns{
    justify-content: space-between;
  }
`;
