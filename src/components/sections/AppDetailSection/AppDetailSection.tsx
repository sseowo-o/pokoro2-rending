import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { motion} from 'framer-motion';
import { Box, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import {AppDetail} from './Styles';
import {Section} from '../../../styles/App.styles';
import { 
  textVariants, 
  fadeInUpVariants, 
} from '../../../styles/animationVariants';

const AppDetailSection: React.FC = () => {
  const [appContentIndex, setAppContentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);


  const handleArrowClick = (direction: 'left' | 'right') => {
    const newDirection = direction === 'right' ? 1 : -1;
    setPage([appContentIndex, newDirection]);
    if (direction === 'left') {
      setAppContentIndex(prev => (prev === 0 ? appContents.length - 1 : prev - 1));
    } else {
      setAppContentIndex(prev => (prev === appContents.length - 1 ? 0 : prev + 1));
    }
  };
  const appContents = [
    {
      title: "최근 우리 아이의 관심사를 알 수 있어요.",
      image: "/images/App_01.png"
    },
    {
      title: "대화기록으로 아이의 속마음을 알 수 있어요.",
      image: "/images/App_02.png"
    },
    {
      title: "녹음 파일로 영어발음 분석을 할 수 있어요.",
      image: "/images/App_03.png"
    },
    {
      title: "또래와의 사용량 비교를 할 수 있어요.",
      image: "/images/App_04.png"
    }
  ];



  return (
    <Section className="section sec09">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <Typography variant="h2">
          포코로 앱으로<br />아이의 학습 여정을 한눈에
        </Typography>
      </motion.div>
      <AppDetail className="inner">
        <Box className="app-preview">
          <Stack className="phone-container">
            <img src="/images/App_dev.png" alt="디바이스 이미지" className='device-image'/>
            <div
              style={{ 
                textAlign: 'center',
                position: 'relative',
                width: '303px',
                overflow: 'hidden'
              }}
            >
              <img 
                src={appContents[appContentIndex].image} 
                alt="포코로 앱" 
                style={{ 
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />
            </div>
            <motion.div
              key={appContentIndex}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Typography variant="h3">{appContents[appContentIndex].title}</Typography>
            </motion.div>
            <Icon 
              icon="lets-icons:arrow-right-light" 
              className="arrow right" 
              width="160" 
              height="160" 
              onClick={() => handleArrowClick('right')}
            />
            <Icon 
              icon="lets-icons:arrow-left-light" 
              className="arrow left" 
              width="160" 
              height="160" 
              onClick={() => handleArrowClick('left')}
            />
          </Stack>
        </Box>
      </AppDetail>
    </Section>
  );
};

export default AppDetailSection; 