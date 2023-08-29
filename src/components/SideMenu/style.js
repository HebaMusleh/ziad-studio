import styled from "styled-components";

export const SideStyle = styled.div`
  // background: #00000047;
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
    background: #fff;
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
    display:flex;
    align-items:center;
    gap:10px;
    font-size: 24px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: 0em;
    color: #5f5f5f;
    a {
      font-size: 24px;
      font-weight: 500;
      line-height: 41px;
      letter-spacing: 0em;
      text-align: center;
      padding-right: 10px;
      color: #5f5f5f;
    }
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }
  .closeIcon {
    font-size: 40px;
    color: #545454;
    cursor: pointer;
  }
  .secondSection {
    padding: 20px 0;
  }
  .thirdSection {
    padding: 20px 0;
  }
  .arabic-english {
    button {
      padding: 3px 20px;
      border-radius: 28px;
      border: 1px solid #77b5fe;
      outline: none;
      background: #77b5fe;
      font-size: 16px;
      font-weight: 800;
      line-height: 41px;
      letter-spacing: 0em;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }
  }
  .theme-btns{
    display: flex;
    align-items: center;
    // justify-content:space-between;
  }
`;
