import React from 'react';
import Typography from '@mui/material/Typography';
import {
  ContentWrapper,
  TextContent,
  FloatingImage,
  ScrollIndicator,
} from './Styles';
import { Section } from '../../../styles/App.styles';

interface MainSectionProps {
  fullpageApi: any; // TODO: fullpage.js의 타입 정의 필요
}

const MainSectionContent: React.FC<MainSectionProps> = ({ fullpageApi }) => {
  return (
    <Section className="section sec01">
      <FloatingImage src="/images/calculator.png" alt="계산기" top="10%" left="5%" className="main-item"/>
      <FloatingImage src="/images/magnifier.png" alt="돋보기" top="23%" right="43%" className="main-item"/>
      <FloatingImage src="/images/pencil.png" alt="연필" bottom="3%" left="3%" className="main-item"/>
      <FloatingImage src="/images/rocket.png" alt="로켓" top="0%" right="2%" className="main-item"/>
      <FloatingImage src="/images/megaphone.png" alt="확성기" bottom="18%" right="42%" className="main-item"/>
      <ContentWrapper className="inner">
      <TextContent>
          <Typography variant="h1" gutterBottom>
          아이의 호기심을<br />
          채워주는 <span className="highlight">AI</span> 소리펜
          </Typography>
          <img src="/images/main_tit.png" alt="POKORO" className="pokoro-logo" />
      </TextContent>
      <img src="/images/pokoro-device.png" alt="POKORO AI 소리펜" className="pokoro-device" />
      </ContentWrapper>
      <ScrollIndicator onClick={() => fullpageApi.moveSectionDown()}>
      <span>Scroll Down</span>
      </ScrollIndicator>
    </Section>
  );
};

export default MainSectionContent; 