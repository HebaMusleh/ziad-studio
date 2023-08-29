import React from 'react'

import { Container } from '../../../global/component'
import Title from '../../../components/Title'

import { USStyle } from './style'

import img from '../../../assets/us.png';
import left from '../../../assets/left.png';
import right from '../../../assets/right.png';

const US = () => {
  return (
    <USStyle>
        <Container>
            <div className="us-content">
            <div className="right-wrapper">
                <img src={right} alt="" />
            </div>
            <div className="left-wrapper">
                <img src={left} alt="" />
            </div>
                <div className="images">
                <img src={img} alt="images" />
                </div>
            <Title 
            title="من نحن"
            desc="نحن زياد ستوديو للتصميم الإبداعي متخصصون بتصميم الهويات البصريه للأنشطة التجاريه والشركات ، لدينا خبره طويلة في مجالنا ونسعى ان نكون احد ركائز مشروعكم التجاري ، لاننا نملك لمسات استراتيجيه ابداعيه مختلفه سنخرج لكم تصاميم تعكس طابع مشروعكم التجاري بعد دراسته وتحليله بشكل دقيق لتصل رسالتك لجمهورك وتعكس ما يهدف إليه عملك التجاري وتميزك عن المنافسين .. ونكون معكم خطوة بخطوة الى وصولكم اعلى قمة هرم النجاح .. ونكون جزء من هذا النجاح المبهر ."
            />
            </div>
        </Container>
    </USStyle>
  )
}

export default US