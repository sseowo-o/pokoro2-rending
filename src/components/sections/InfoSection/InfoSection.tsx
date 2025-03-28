import React from 'react';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Box} from '@mui/material';
import {Section} from '../../../styles/App.styles';
import { PokoroInfo } from './Styles';
import { 
  textVariants, 
  fadeInUpVariants, 
  featurePointVariants, 
  lineVariants 
} from '../../../styles/animationVariants';


const InfoSection: React.FC = () => {
  return (
    <Section className="section sec08">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUpVariants}
      >
        <Typography variant='h2'>아이들을 위한<br/>화면 없는 AI 소리펜, 포코로</Typography>
      </motion.div>
      <PokoroInfo className="device-container">
        <img src="/images/pokoro-device3.png" alt="포코로 디바이스 특징" className="device-image" />
        <Box className="feature-point">
          <motion.div
            custom={1}
            variants={featurePointVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <div className="title">
              <div className="icon"></div>
              <Typography variant='h5'>Universal Design</Typography>
            </div>
            <Typography variant='h6'>
              아이뿐만 아니라 어르신이<br/>사용하기에도 어색하지 않아요.
            </Typography>
            <motion.img 
              src="/images/Info_line01.svg" 
              alt="설명선" 
              custom={1}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            />
          </motion.div>
        </Box>

        <Box className="feature-point">
          <motion.div
            custom={2}
            variants={featurePointVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <div className="title">
              <div className="icon"></div>
              <Typography variant='h5'>대화버튼</Typography>
            </div>
            <Typography variant='h6'>
              아무때나 내 얘기를 들을까 걱정하지 않아도 되요.<br/>포코로는 버튼을 누르고 이야기 했을때만 듣도록<br/>설계되었어요.
            </Typography>
            <motion.img 
              src="/images/Info_line02.svg" 
              alt="설명선" 
              custom={2}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            />
          </motion.div>
        </Box>

        <Box className="feature-point">
          <motion.div
            custom={3}
            variants={featurePointVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <div className="title">
              <div className="icon"></div>
              <Typography variant='h5'>Ncode 인식 카메라</Typography>
            </div>
            <Typography variant='h6'>
              호환되는 교재를 읽어주기도 해요.<br/>교재와 관련한 질문을 해본다면<br/>그 내용은 머릿속에 더 잘 기억이 될거예요.
            </Typography>
            <motion.img 
              src="/images/Info_line03.svg" 
              alt="설명선" 
              custom={3}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            />
          </motion.div>
        </Box>

        <Box className="feature-point">
          <motion.div
            custom={4}
            variants={featurePointVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <div className="title">
              <div className="icon"></div>
              <Typography variant='h5'>픽셀 LED</Typography>
            </div>
            <Typography variant='h6'>
              포코로는 항상 웃고 있어요.<br/>하지만 배고프면 우는 표정으로 바뀐답니다.
            </Typography>
            <motion.img 
              src="/images/Info_line04.svg" 
              alt="설명선" 
              custom={4}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            />
          </motion.div>
        </Box>

        <Box className="feature-point">
          <motion.div
            custom={5}
            variants={featurePointVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <div className="title">
              <div className="icon"></div>
              <Typography variant='h5'>Wi-Fi</Typography>
            </div>
            <Typography variant='h6'>
              통신이 가능한 곳이라면<br/>어디서든 대화할 수 있어요.
            </Typography>
            <motion.img 
              src="/images/Info_line05.svg" 
              alt="설명선" 
              custom={5}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            />
          </motion.div>
        </Box>

        <Box className="feature-point">
          <motion.div
            custom={6}
            variants={featurePointVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <div className="title">
              <div className="icon"></div>
              <Typography variant='h5'>Filtering System</Typography>
            </div>
            <Typography variant='h6'>
              아이에게 부적절한 정보나 단어를 사용하지 않도록<br/>필터링하는 시스템이 있어요.
            </Typography>          
            <motion.img 
              src="/images/Info_line06.svg" 
              alt="설명선" 
              custom={6}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            />
          </motion.div>
        </Box>
      </PokoroInfo>
    </Section>
  );
};

export default InfoSection; 