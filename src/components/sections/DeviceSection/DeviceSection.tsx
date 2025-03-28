import React from 'react';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {
  DeviceTada,
} from './Styles';
import { Section } from '../../../styles/App.styles';


const shakeAnimation = {
  initial: { scale: 0 },
  animate: { 
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.5
    }
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.3
    }
  }
};


const DeviceSection: React.FC = () => {
  return (
    <Section className="section sec04">
      <DeviceTada>
      <motion.img 
          src="/images/pokoro-device2.png" 
          alt="POKORO" 
          className="pokoro-logo2"
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: false }}
          variants={shakeAnimation}
      />
      <motion.div
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ once: false }}
          variants={shakeAnimation}
      >
          <Typography variant="h1">
          포코로한테 무엇이든 물어봐 :)
          </Typography>
      </motion.div>
      </DeviceTada>
    </Section>
  );
};

export default DeviceSection; 