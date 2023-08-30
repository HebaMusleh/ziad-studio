import React, { useState, useEffect } from 'react';
import { CardStyle } from './style';
import { motion } from 'framer-motion';
import { textVariant2 } from '../../../../utils/motion';

const Card = ({ icons, num, title }) => {
  const [countdown, setCountdown] = useState(0); // Initialize countdown to 0
  const interval = 5;

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown + 1);
  
      if (countdown >= num) {
        clearInterval(countdownInterval);
      }
    }, interval);
  
    return () => {
      clearInterval(countdownInterval);
    };
  }, [num, countdown]);

  return (
    <motion.div variants={textVariant2} className={`flexCenter`}>
      <CardStyle>
        <div className='icons singleIcon'>{icons}</div>
        <div className='num'>
          <p>{countdown < num ? countdown : num}+</p>
        </div>
        <div className='word'>
          <p>{title}</p>
        </div>
      </CardStyle>
    </motion.div>
  );
};

export default Card;
