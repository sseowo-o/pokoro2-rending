import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import {
  ConversationWrap,
  ConversationTextBox,
  ConversationList,
  ConversationItem,
  ConversationItemContent,
  ConversationImageBox,
} from './Styles';
import { Section } from '../../../styles/App.styles';
import { fadeInUpVariants } from '../../../styles/animationVariants';


const ConversationSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState('/images/sec07_img01.png');
  return (
    <Section className="section sec07">
      <ConversationWrap>
        <ConversationTextBox className="inner"> 
          <div className="con-box">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUpVariants}
            >
              <Typography variant="h2">
                포코로랑 어떤<br />대화를 할 수 있나요?
              </Typography>
            </motion.div>
            <div className="list-box">
              <ConversationList data-rolling-time="2000">
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  data-img="/images/sec07_img01.png"
                  className={activeImage === '/images/sec07_img01.png' ? 'on' : ''}
                >
                  <ConversationItem 
                    href="#"
                    onMouseEnter={() => setActiveImage('/images/sec07_img01.png')}
                  >
                    <ConversationItemContent>
                      <dt>
                        <span className="icon" style={{ backgroundImage: "url('/images/sec07_ico01.svg')" }} />
                      </dt>
                      <dd>
                        <Typography variant='h4'>호기심 해결 </Typography>
                        <Typography variant='h6'>궁금한 것들은 언제든지 물어보세요.</Typography>
                      </dd>
                    </ConversationItemContent>
                  </ConversationItem>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  data-img="/images/sec07_img02.png"
                  className={activeImage === '/images/sec07_img02.png' ? 'on' : ''}
                >
                  <ConversationItem 
                    href="#"
                    onMouseEnter={() => setActiveImage('/images/sec07_img02.png')}
                  >
                    <ConversationItemContent>
                      <dt>
                        <span className="icon" style={{ backgroundImage: "url('/images/sec07_ico02.svg')" }} />
                      </dt>
                      <dd>
                        <Typography variant='h4'>외국어 대화</Typography>
                        <Typography variant='h6'>영어, 중국어, 일본어로도 대화할 수 있어요.</Typography>
                      </dd>
                    </ConversationItemContent>
                  </ConversationItem>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  data-img="/images/sec07_img03.png"
                  className={activeImage === '/images/sec07_img03.png' ? 'on' : ''}
                >
                  <ConversationItem 
                    href="#"
                    onMouseEnter={() => setActiveImage('/images/sec07_img03.png')}
                  >
                    <ConversationItemContent>
                      <dt>
                        <span className="icon" style={{ backgroundImage: "url('/images/sec07_ico03.svg')" }} />
                      </dt>
                      <dd>
                        <Typography variant='h4'>자유로운 대화</Typography>
                        <Typography variant='h6'>포코로와 어떤 대화를 해야할지 모르겠을 땐<br/>말놀이 카드의 도움을 받아보세요.</Typography>
                      </dd>
                    </ConversationItemContent>
                  </ConversationItem>
                </motion.li>
              </ConversationList>
            </div>
          </div>
        </ConversationTextBox>
        <ConversationImageBox>
          <div className="inner-box">
            <div 
              className="img-wrap" 
              style={{ backgroundImage: `url('${activeImage}')` }} 
            />
          </div>
        </ConversationImageBox>
      </ConversationWrap>
    </Section>
  );
};

export default ConversationSection;   