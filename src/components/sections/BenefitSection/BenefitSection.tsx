import React from 'react';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {
  BenefitCard,
  BenefitGrid
} from './Styles';
import { Section } from '../../../styles/App.styles';
import { scaleVariants, fadeInUpVariants, staggerContainerVariants } from '../../../styles/animationVariants';

const BenefitSection: React.FC = () => {
  return (
    <Section className="section sec06">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <Typography variant="h2">왜 포코로랑<br/>대화하는게 좋을까요?</Typography>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={staggerContainerVariants}
      >
        <BenefitGrid className="inner">
          <BenefitCard
            variants={scaleVariants}
          >
            <Typography variant="h4">No Screen</Typography>
            <p>
              숏폼 등의 과도한 미디어 노출에 대한 우려를 
              지웠습니다. 화면에 의지하지 않고도 놀리 교육, 
              코딩 교육과도 맞닿아있는 AI에게 질문하는 
              능력을 기를 수 있습니다.
            </p>
            <img src="/images/noscreen.png" alt="No Screen" />
          </BenefitCard>
          <BenefitCard
            variants={scaleVariants}
          >
            <Typography variant="h4">Communication</Typography>
            <p>
              아이가 발화하도록 유도하여
              스스로 자신의 감정과 생각을 말하면서
              의사 표현 능력을 기를 수 있습니다.
            </p>
            <p>
              설명을 귀담아 듣는 연습이 미래 학습능력에도
              도움을 줄 수 있습니다.
            </p>
            <img src="/images/communication.png" alt="Communication" />
          </BenefitCard>
          <BenefitCard
            variants={scaleVariants}
          >
            <Typography variant="h4">Education</Typography>
            <p>
              끊없는 대화 속에서 자연스럽게 어휘력이                        
              자라나고 문맥을 이해하는 힘이 생깁니다.
            </p>
            <p>
              궁금함이 질문하고 답을 찾으며 사고력이
              높아집니다.
            </p>
            <p>
              질문과 답을 외국어로 해보며 어휘력도 또한
              높일 수 있습니다.
            </p>
            <img src="/images/education.png" alt="Education" />
          </BenefitCard>
        </BenefitGrid>
      </motion.div>
    </Section>
  );
};

export default BenefitSection; 