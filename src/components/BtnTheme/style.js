import styled from "styled-components";

export const Style = styled.div`
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    transition: 0.4s;
    border-radius: 30px;
    &:before {
      position: absolute;
      content: "";
      height:1.4em;
      width:1.4em;
      border-radius:20px;
      left:0.3em;
      bottom:0.3em;
      background:linear-gradient(40deg,#ff0080,#ff8c00 70%);
      transition:0.4s;
    }
  }
  input:checked + .slider{
    background:#333;
  }
  input:checked + .slider:before{
    transform:translateX(1.5em);
    background:#000;
    box-shadow:inset -3px -2px 5px -2px #8983f7, inset -10px -5px 0 0 #a3dafd;

  }
`;
