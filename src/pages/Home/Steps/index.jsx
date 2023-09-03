import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import Data from "../../../mock/data";


import { textVariant3, staggerContainer } from "../../../utils/motion";

import { Wrapper, VerticalWrapper, Title,H2 } from './style'
import { Container } from "../../../global/component";
import { useTranslation } from "react-i18next";

const ExperienceCard = ({ step }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: step.iconBg, color: "#fff"}}
            contentArrowStyle={{
                borderRight: `7px solid ${step.iconBg}`,
            }}
            date={step.num}
            iconStyle={{ background: step.iconBg }}
            icon={
                <VerticalWrapper>
                    <img
                        src={step.icon}
                        alt={step.num}
                    />
                </VerticalWrapper>
            }>
            <Title>
                <h3>{step.title}</h3>
            </Title>
        </VerticalTimelineElement>
    );
};
const Steps = () => {
    const { t } = useTranslation();
    const data = Data();
    return (
        <Wrapper>
            <Container>
                <motion.section
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className={`max-w-7xl mx-auto relative z-0`}>
                    <span className="hash-span">
                        &nbsp;
                    </span>
                    <motion.dev variant={textVariant3()}>
                        <H2>{t('project')}</H2>
                    </motion.dev>
                    <div className="wrapped">
                        <VerticalTimeline>
                            {data.map((step, index) => (
                                <ExperienceCard key={index} step={step} />
                            ))}
                        </VerticalTimeline>
                    </div>
                </motion.section>
            </Container>
        </Wrapper>
    );
};

export default Steps