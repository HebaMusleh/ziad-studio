import styled from "styled-components";

export const Style = styled.div`
  padding: 10px;
  border:2px solid ${props=>props.bg};
  flex-basis: 25%;
  margin: 20px 0;
  border-radius: 16px;
  position: relative;
  height: 250px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  background:transparent;
  p {
    font-size: 11px;
    padding-top: 30px;
    color:${props=>props.theme.palette.secondaryCustomerColor}
  }
  .wrapper-icons {
    position: absolute;
    top: -20px;
    left: 40%;
    @media (max-width: 480px) {
        left: 27%;
      }
    background: ${props=>props.bg};
    padding: 10px;
    border-radius: 50%;
    .icons {
      width: 30px;
      height: 30px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
