import styled from "styled-components";

export const Style = styled.div`
  flex-basis: 350px;
  margin-bottom: 30px;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 7px;
    cursor: pointer;
    background: linear-gradient(rgb(0, 0, 0, 0.5), #1f81b0);
    opacity: 0;
    transition: 1s;
  }
  &:hover .overlay {
    opacity: 1;
  }
  .work-desc {
    width: 80%;
    position: absolute;
    bottom: 0;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 1s;
    color:#fff;
  }
  &:hover .work-desc {
    bottom: 40%;
    opacity: 1;
  }
  hr {
    background-color: #fff;
    height: 2px;
    border: 0;
    margin: 15px auto;
    width: 60%;
    @media (max-width: 480px) {
      margin: 5px auto;
    }
  }
`;
