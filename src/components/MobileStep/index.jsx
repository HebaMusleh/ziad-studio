import React from 'react';
import Card from './Card';
import { PiArrowArcRightFill,PiArrowArcLeftFill } from 'react-icons/pi';
import styled from 'styled-components';
import Data from '../../mock/data';
import { useLanguage } from './../../context/directionContext';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  .arrow {
    font-weight: 500;
    font-size: 30px;
    color: ${props => props.theme.palette.secondaryCustomerColor};
  }
`;

const MobileStep = () => {
  const sortedData = Data().sort((a, b) => a.id - b.id);
  const {direction} = useLanguage();

  return (
    <Wrapper>
      {sortedData.map((item) => (
        <React.Fragment key={item.id}>
          <Card icon={item.icon} desc={item.title} bg={item.iconBg} id={item.id} />
          {item.id === 3 || item.id === 6 ? (
            ""
          ) : (
            direction ==="ltr"?<PiArrowArcRightFill className='arrow' />:<PiArrowArcLeftFill className='arrow' />
          )}
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default MobileStep;
