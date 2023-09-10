import React from 'react'
import { ServicesStyle } from './style'

import img from '../../../assets/service.svg';
import rectangle from '../../../assets/rectangle.svg';
import { Container } from '../../../global/component';

const Services = () => {
    return (
        <ServicesStyle>
            <Container>
                <div className="content-service">
                <div className="description">
                    <div className="title">
                        <h3>نختص بخدمات بناء وتصميم العلامات التجارية :</h3>
                        <img src={rectangle} alt="rectangle" />
                    </div>
                    <div className="body">
                        <ul>
                            <li>- اقتراحات الاسم التجاري</li>
                            <li>- تصميم عناصر الهويه</li>
                            <li>- تصميم التعليب والتغليف</li>
                            <li>- تصميم دليل متكامل للهويه البصريه</li>
                            <li>- تصميم بروفايل تعريفي للشركات او المطاعم تفاعلي أو للطباعه </li>
                        </ul>
                    </div>
                </div>
                <div className="images">
                    <img src={img} alt="service img" />
                </div>
                </div>
            </Container>
        </ServicesStyle>
    )
}

export default Services