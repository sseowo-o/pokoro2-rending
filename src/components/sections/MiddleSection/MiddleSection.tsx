import React from 'react';
import Typography from '@mui/material/Typography';
import { motion} from 'framer-motion';
import {Section} from '../../../styles/App.styles';
import {fadeInUpVariants} from '../../../styles/animationVariants';
import {FloatingImage } from './Styles';

const MiddleSection: React.FC = () => {
  return (
    <Section className="section sec03">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <Typography variant="h1" textAlign="center">
          궁금한게 너무 많은데<br/>
          누구한테 물어보지?
          <FloatingImage 
            src="/images/question.png" 
            alt="물음표01" 
            top="-90%" 
            right="-30%" 
          />
          <FloatingImage 
            src="/images/question.png" 
            alt="물음표02" 
            top="-15%" 
            left="-30%" 
            width="85px"
          />
          <FloatingImage 
            src="/images/question.png" 
            alt="물음표02" 
            bottom="-70%" 
            right="30%" 
            width='55px'
          />
        </Typography>
      </motion.div>
    </Section>
  );
};

export default MiddleSection; 