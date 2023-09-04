import React, { useState, useEffect } from 'react';

import { CardStyle } from './style';

const Card = ({ icons, num, title }) => {
  const [countdown, setCountdown] = useState(0);
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
    <CardStyle>
      <div className='icons singleIcon'>{icons}</div>
      <div className='num'>
        <p>{countdown < num ? countdown : num}+</p>
      </div>
      <div className='word'>
        <p>{title}</p>
      </div>
    </CardStyle>
  );
};

export default Card;
