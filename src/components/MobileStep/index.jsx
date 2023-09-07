import React from 'react'
import Card from './Card'
import { PiArrowArcRightFill, PiArrowArcLeftFill } from 'react-icons/pi'
import styled from 'styled-components'
import Data from '../../mock/data'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  direction:ltr;
  .arrow {
    font-weight: 500;
    font-size: 30px;
    color:${props=>props.theme.palette.secondaryCustomerColor};
  }
`

const MobileStep = () => {
  const data = Data();

  return (
    <Wrapper>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <Card icon={item.icon} desc={item.title} bg={item.iconBg} />
          {item.id <4 ? (
            <PiArrowArcRightFill className='arrow' />
          ) : (
            <PiArrowArcLeftFill className='arrow' />
          )}
        </React.Fragment>
      ))}
    </Wrapper>
  )
}

export default MobileStep
