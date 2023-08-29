import React from 'react'
import {SlCalender} from 'react-icons/sl';
import { CardStyle } from './style';

const Card = ({icons,num,title}) => {
  return (
    <CardStyle>
        <div className='icons singleIcon'>
            {/* <icons className='singleIcon'/> */}
            {icons}
        </div>
        <div className='num'>
            <p>{num}</p>
        </div>
        <div className='word'>
            <p>{title}</p>
        </div>
    </CardStyle>
  )
}

export default Card