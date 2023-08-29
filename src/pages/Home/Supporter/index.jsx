import React from 'react'


import img1 from '../../../assets/Support1.png';
import img2 from '../../../assets/Support2.png';
import img3 from '../../../assets/Support3.png';
import img4 from '../../../assets/Support4.png';
import img5 from '../../../assets/Support5.png';
import img6 from '../../../assets/Support6.png';
import img7 from '../../../assets/Support7.png';
import img8 from '../../../assets/Support8.png';


import { SupporterStyle } from './style'

import Title from '../../../components/Title'
import { Container } from '../../../global/component';

const Supporter = () => {
  return (
    <SupporterStyle>
      <Container>
        <div className="wrapper">
          <Title
            title="أبرز عملائنا "
            desc="أبرز عملائنا في عالم الإبداع، انا هنا لتحويل رؤيتك إلى واقع من خلال تصاميم جرافيكية تلهم وتبهر، دعونا نبني مستقبل مبهرج لعلامتك التجارية سويًا.
      "
          />
          <div className='scroll'>
            <div className='imgBox'><img src={img1} alt="img1" /></div>
            <div className='imgBox'><img src={img2} alt="img2" /></div>
            <div className='imgBox'><img src={img3} alt="img3" /></div>
            <div className='imgBox'><img src={img4} alt="img4" /></div>
          </div>
          <div className='scroll'>
            <div className='imgBox'><img src={img5} alt="img5" /></div>
            <div className='imgBox'><img src={img6} alt="img6" /></div>
            <div className='imgBox'><img src={img7} alt="img7" /></div>
            <div className='imgBox'><img src={img8} alt="img8" /></div>
          </div>
        </div>
      </Container>
    </SupporterStyle>
  )
}

export default Supporter