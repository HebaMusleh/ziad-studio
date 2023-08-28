import React from 'react'

import { Wrapper } from './style'
import BtnOrder from '../../../../components/BtnOrder'

const Card = ({ img, title, desc, price }) => {
  return (
    <Wrapper>
      <div className='image'>
        <img src={img} alt="" />
      </div>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="description">
        <p>
          {desc}
        </p>
      </div>
      <div className="price">
        <h4>{price}</h4>
        <BtnOrder />
      </div>
    </Wrapper>
  )
}

export default Card