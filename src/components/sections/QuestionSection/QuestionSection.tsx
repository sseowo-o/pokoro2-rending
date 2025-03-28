import { motion } from "framer-motion";
import React from 'react';
import {
  QuestionBubble,
  BubbleContainer,
} from './Styles';
import { Section } from '../../../styles/App.styles';

const QUESTIONS_LAYOUT = [
  { text: '왜요?', top: 401, left: 475, transform: 'rotate(4.951deg)' },
  { text: '왜요?', top: 681, left: 1193, transform: 'rotate(-15deg)' },
  { text: '왜요?', top: 92, left: 1067, transform: 'rotate(4.358deg)' },
  { text: '왜요?', top: 331, left: 1105, transform: 'rotate(4.358deg)' },
  { text: '지구는 몇 살이예요?', top: 253, left: 55, transform: 'rotate(-26.688deg)' },
  { text: '귀신은 진짜 있어요?', top: 347, left: 520, transform: 'rotate(10deg)' },
  { text: '왜요?', top: 15, left: 615, transform: 'rotate(4.951deg)' },
  { text: '왜요?', top: 695, left: 202, transform: 'rotate(-9.451deg)' },
  { text: '왜요?', top: 309, left: 1377, transform: 'rotate(18.23deg)' },
  { text: '왜요?', top: 441, left: 30, transform: 'rotate(-9.451deg)' },
  { text: '왜요?', top: 655, left: 971, transform: 'rotate(4.951deg)' },
  { text: '왜요?', top: 200, left: 96, transform: 'rotate(0deg)' },
  { text: '왜 게임은 오래 하면 안돼요?', top: 142, left: 800, transform: 'rotate(16.66deg)' },
  { text: '별은 왜 밤에만 보여요?', top: 659, left: 400, transform: 'rotate(11deg)' },
  { text: '바닷물은 왜 짜요?', top: 59.85, left: 151.57, transform: 'rotate(-2.363deg)' },
  { text: '왜요?', top: 178, left: 601, transform: 'rotate(-14deg)' },
  { text: '왜요?', top: 255, left: 891, transform: 'rotate(4.358deg)' },
  { text: '왜요?', top: 542, left: 494, transform: 'rotate(4.358deg)' },
  { text: '왜요?', top: 490, left: 870, transform: 'rotate(13.44deg)' },
  { text: '왜요?', top: 598, left: 1317, transform: 'rotate(9.639deg)' },
  { text: '왜요?', top: 90, left: 1285, transform: 'rotate(-9deg)' },
  { text: '왜요?', top: 442, left: 1161, transform: 'rotate(-13deg)' },
  { text: '왜요?', top: 764, left: 820, transform: 'rotate(-13deg)' },
  { text: '어떻게 하는거예요?', top: 565, left: 791, transform: 'rotate(-8deg)' },
  { text: '왜요?', top: 448, left: 652, transform: 'rotate(-2deg)' },
  { text: '이건 뭐예요?', top: 529, left: 136, transform: 'rotate(-17deg)' },
  { text: '왜 안돼요?', top: 350, left: 1195, transform: 'rotate(40.223deg)' },
  { text: '왜요?', top: 654, left: 0, transform: 'rotate(9.639deg)' },
  { text: '왜요?', top: 397, left: 246, transform: 'rotate(9.639deg)' },
];
const redIndices = [4, 5, 12, 13, 14, 23, 25, 26];
const rowOpacityIndices = [0, 1, 2, 3];
const rowOpacity2Indices = [6, 7, 8, 9, 10, 16, 17, 18];

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: {
      duration: 0.3,
      ease: [0.1, 0, 0.1, 1]
    }
  }
};
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const QuestionSection: React.FC = () => {
  return (
    <Section className="section sec02">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={staggerContainerVariants}
        >
        <BubbleContainer>
            {QUESTIONS_LAYOUT.map((item, index) => (
            <motion.div
                key={index}
                variants={fadeInVariants}
            >
                <QuestionBubble
                delay={index * 0.2}
                top={item.top}
                left={item.left}
                transform={item.transform}
                isRed={redIndices.includes(index)}
                isRowOpacity={rowOpacityIndices.includes(index)}
                isRowOpacity2={rowOpacity2Indices.includes(index)}
                >
                {item.text}
                </QuestionBubble>
            </motion.div>
            ))}
        </BubbleContainer>
        </motion.div>
    </Section>
  );
};

export default QuestionSection; 