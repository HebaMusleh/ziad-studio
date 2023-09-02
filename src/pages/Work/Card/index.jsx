import React from 'react'

import test from '../../../assets/work6.png';
import { CardStyle } from './style';

import insta from '../../../assets/insta.png';
import facebook from '../../../assets/face.png';
import whats from '../../../assets/whats.png';

const Card = () => {
  return (
    <CardStyle>
        <div className="description-section">
            <h1>بادكو</h1>
            <p>تصميم هوية بصرية متكاملة لمشروع بادل ومتاحة للبيعتم تصميم الشعار من مضرب لعبة البادل وتم اظافة الكرة كدليل على انتقال الضربة للكرة .. وتم اعتماد اللون الازرق كدلالة على الطاقة والحوية اثناء ممارسة هذه اللعبة .. وتم اختيار الخط العربي بعناية ليتماشى مع مضمون الهوية عامة وحرف ال ( و ) في الاسم ياخذ طابع الشعار بالمجمل</p>
            <div className="socials">
                <ul>
                    <li><a href="#"><img src={insta} alt="" /></a></li>
                    <li><a href="#"><img src={facebook} alt="" /></a></li>
                    <li><a href="#"><img src={whats} alt="" /></a></li>
                </ul>
            </div>
        </div>
        <div className="image-section">
            <img src={test} alt="test" />
        </div>
    </CardStyle>
  )
}

export default Card