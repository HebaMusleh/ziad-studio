import React from 'react'
import Title from '../../../components/Title'

import img1 from '../../../assets/work1.png';
import img2 from '../../../assets/work2.png';
import img3 from '../../../assets/work3.png';
import img4 from '../../../assets/work4.png';
import img5 from '../../../assets/work5.png';
import img6 from '../../../assets/work6.png';

import { WorkStyle } from './style';
import { Container } from '../../../global/component';

const Work = () => {
  return (
    <WorkStyle>
        <Title title="أعمالنا" desc="أضف لمسة سحرية إلى عالم علامتنا التجارية مع مصمم جرافيك مبدع، لنرتقي معًا بتصاميمنا إلى مستوى جديد من الإبداع والإبهار.
"/>
       <Container>
       <div className='images'>
            <div className='singleImg'><img src={img1} alt="img1" /></div>
            <div className='singleImg'><img src={img2} alt="img1" /></div>
            <div className='singleImg'><img src={img3} alt="img1" /></div>
            <div className='singleImg'><img src={img4} alt="img1" /></div>
            <div className='singleImg'><img src={img5} alt="img1" /></div>
            <div className='singleImg'><img src={img6} alt="img1" /></div>
        </div>
        <div className='moreBtn'>
        <button> عرض المزيد +</button>
        </div>
       </Container>
    </WorkStyle>
  )
}

export default Work