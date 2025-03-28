import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import MainSectionContent from './components/sections/MainSection/MainSection';
import {AppContainer} from './styles/App.styles';
import QuestionSection from './components/sections/QuestionSection/QuestionSection';
import DeviceSection from './components/sections/DeviceSection/DeviceSection';
import MiddleSection from './components/sections/MiddleSection/MiddleSection';
import AutoSlideSection from './components/sections/AutoSlideSection/AutoSlideSection';
import BenefitSection from './components/sections/BenefitSection/BenefitSection';
import ConversationSection from './components/sections/ConversationSection/ConversationSection';
import InfoSection from './components/sections/InfoSection/InfoSection';
import AppDetailSection from './components/sections/AppDetailSection/AppDetailSection';
import ReviewSection from './components/sections/ReviewSection/ReviewSection';
import FooterSection from './components/sections/FooterSection/FooterSection';


const anchors = ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage'];


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <ReactFullpage
          licenseKey={'YOUR_KEY_HERE'}
          scrollingSpeed={1000}
          navigation
          navigationTooltips={anchors}
          anchors={anchors}
          credits={{ enabled: false }}
          scrollOverflow={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <MainSectionContent fullpageApi={fullpageApi} />
                <QuestionSection />
                <MiddleSection />
                <DeviceSection />
                <AutoSlideSection />
                <BenefitSection />
                <ConversationSection />
                <InfoSection />
                <AppDetailSection />
                <ReviewSection />
                <FooterSection fullpageApi={fullpageApi} />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App; 