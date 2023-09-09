// ArrowToTop.js

import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";

const ArrowButton = styled.button`
  position: fixed;
  width:50px;
  height:50px;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  display: ${({ show }) => (show ? "flex" : "none")};
  background-color: rgba(0,0,0,.4);
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
  font-size:20px;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-weight:800;
`;

const ArrowToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ArrowButton show={showButton} onClick={scrollToTop}>
      <AiOutlineArrowUp/>
    </ArrowButton>
  );
};

export default ArrowToTop;
