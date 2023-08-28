import styled from "styled-components";

export const SideStyle = styled.div`
  background: #00000047;
  position: fixed;
  width: 100%;
  ${(props) => (props.dir == "rtl" ? "right: -2000px" : "left: -2000px")};
  z-index: 1000;
  top: 0;
  transition: 0.5s;
  &.show {
    ${(props) => (props.dir == "rtl" ? "right: 0" : "left:0")};
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
    font-size: 24px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: 0em;
    padding-right: 10px;
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

  #toggle_checkbox {
    display: none;
  }

  label {
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    width: 116px;
    height: 56px;
    margin: 0 auto;
    background-color: #77b5fe;
    border-radius: 56px;
    transform: translateY(-50%);
    cursor: pointer;
    transition: 0.3s ease background-color;
    overflow: hidden;
  }

  #star {
    position: absolute;
    top: 13px;
    left: 13px;
    width: 30px;
    height: 30px;
    background-color: #fafd0f;
    transform: scale(1);
    border-radius: 50%;
    transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform,
      0.3s ease background-color;
    z-index: 1;
  }

  #star-1 {
    position: relative;
  }

  #star-2 {
    position: absolute;
    transform: rotateZ(36deg);
  }

  .star {
    top: 0;
    left: -7px;
    font-size: 54px;
    line-height: 28px;
    color: #fafd0f;
    transition: 0.3s ease color;
  }

  #moon {
    position: absolute;
    bottom: -52px;
    right: 8px;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s ease bottom;
  }

  #moon:before {
    content: "";
    position: absolute;
    top: -12px;
    left: -17px;
    width: 40px;
    height: 40px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s ease background-color;
  }

  #toggle_checkbox:checked + label {
    background-color: #000;
  }

  #toggle_checkbox:checked + label #star {
    top: 3px;
    left: 64px;
    transform: scale(0.3);
    background-color: yellow;
  }

  #toggle_checkbox:checked + label .star {
    color: yellow;
  }

  #toggle_checkbox:checked + label #moon {
    bottom: 8px;
  }

  #toggle_checkbox:checked + label #moon:before {
    background-color: #000;
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
`;
