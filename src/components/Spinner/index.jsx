import React from 'react'
import styled from 'styled-components'

const SpinnerStyle = styled.div`
.splash-screen {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 20%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: splashAnimation 2s ease-in-out forwards;
    z-index: 9999;
  }
  
  &@keyframes splashAnimation {
    0% {
      transform: translate(-50%, -50%) scale(0.1) rotate(0deg);
      opacity: 0;
    }
  
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(360deg);
      opacity: 1;
    }
  }
`
const Spinner = () => {
  return (
    <SpinnerStyle>
      <h1>loading</h1>
      {/* <div className="splash-screen"> */}
      {/* <img src={logo} alt='logo' loading='lazy' /> */}
      {/* </div> */}
    </SpinnerStyle>
  )
}

export default Spinner