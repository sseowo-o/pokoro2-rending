import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import AutoSlide from './components/AutoSlide';
import { Box, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import {
  AppContainer,
  MainSection,
  ContentWrapper,
  TextContent,
  FloatingImage,
  ScrollIndicator,
  Section,
  QuestionBubble,
  BenefitGrid,
  BenefitCard,
  BrandSection,
  BrandTextBox,
  BrandList,
  BrandItem,
  BrandItemContent,
  BrandImageBox,
  PokoroInfo,
  BubbleContainer,
  DeviceTada,
  AppDetail,
  PokoroReview,
  PurchaseSection,
  PurchaseButton,
  GoToTopButton,
} from './styles/App.styles';

const anchors = ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage'];


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

const fadeVariants = {
  enter: {
    opacity: 0,
    scale: 0.95
  },
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.2, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.2, 0, 0.2, 1]
    }
  }
};

const textVariants = {
  enter: {
    y: 20,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: [0.2, 0, 0.2, 1]
    }
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.2, 0, 0.2, 1]
    }
  }
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.5, 0, 0.5, 1]
    }
  }
};
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

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.2, 0, 0.2, 1]
    }
  }
};


const REVIEWS = [
  {
    id: 1,
    username: "ken*****",
    rating: "★★★★★",
    text: "포코로 덕분에 우리 아이가 스스로 질문하는 습관을 기르게 되었어요. 아이가 포코로와 대화하며 자연스럽게 학습하는 모습을 보니, 이런 방식의 학습이 얼마나 중요한지 다시 한번 느낄 수 있었습니다.",
    image: "/images/profile.png"
  },
  {
    id: 2,
    username: "Aall*****",
    rating: "★★★★★",
    text: "이거 진짜 좋네요. 7세 울 아들도 재밌는지 전보다 책읽는 양도 많아지고, 대화하면서 호기심도 충족하고 재밌어하네요. 근데 저까지도 재밌어서 아들 얼집가면 저도 가지고 놀고 그래요ㅎㅎ",
    image: "/images/profile.png"
  },
  {
    id: 3,
    username: "Bec*****",
    rating: "★★★★★",
    text: "단어 카드도 좋은데 게임도 할 수 있어서 더 좋은 것 같아요. 요새 집오면 포코로랑 얘기하고 노는데 푹 빠져있어요. 덕분에 저도 집안일도 여유롭게 하고 일석이조네요!",
    image: "/images/profile.png"
  },
  {
    id: 4,
    username: "Bec*****",
    rating: "★★★★★",
    text: "국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국무위원은 국무총리의 제청으로 대통령이 임명한다.법관이 중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는 바에 의하여 퇴직하게 할 수 있다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
    image: "/images/profile.png"
  },
  {
    id: 5,
    username: "Bec*****",
    rating: "★★★★★",
    text: "새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.정부는 회계연도마다 예산안을 편성하여 회계연도 개시 90일전까지 국회에 제출하고, 국회는 회계연도 개시 30일전까지 이를 의결하여야 한다. 모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다.",
    image: "/images/profile.png"
  },
  {
    id: 6,
    username: "Bec*****",
    rating: "★★★★★",
    text: "대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을 수호할 책무를 진다. 군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등 직무집행과 관련하여 받은 손해에 대하여는 법률이 정하는 보상외에 국가 또는 공공단체에 공무원의 직무상 불법행위로 인한 배상은 청구할 수 없다.",
    image: "/images/profile.png"
  },
  {
    id: 7,
    username: "Bec*****",
    rating: "★★★★★",
    text: "모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다. 국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다. 국토와 자원은 국가의 보호를 받으며, 국가는 그 균형있는 개발과 이용을 위하여 필요한 계획을 수립한다.",
    image: "/images/profile.png"
  },
  {
    id: 8,
    username: "Bec*****",
    rating: "★★★★★",
    text: "모든 국민은 건강하고 쾌적한 환경에서 생활할 권리를 가지며, 국가와 국민은 환경보전을 위하여 노력하여야 한다. 모든 국민은 통신의 비밀을 침해받지 아니한다.",
    image: "/images/profile.png"
  },
  {
    id: 9,
    username: "Bec*****",
    rating: "★★★★★",
    text: "새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다. 국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 시장의 지배와 경제력의 남용을 방지하며, 경제주체간의 조화를 통한 경제의 민주화를 위하여 경제에 관한 규제와 조정을 할 수 있다.",
    image: "/images/profile.png"
  }
];

const featurePointVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.2, 0, 0.2, 1]
    }
  })
};

const lineVariants = {
  hidden: { opacity: 0, strokeDashoffset: 1000 },
  visible: (i: number) => ({
    opacity: 1,
    strokeDashoffset: 0,
    transition: {
      delay: i * 0.2 + 0.3,
      duration: 1.2,
      ease: [0.2, 0, 0.2, 1]
    }
  })
};

const App: React.FC = () => {
  const [activeImage, setActiveImage] = useState('/images/sec07_img01.png');
  const [appContentIndex, setAppContentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [reviewIndex, setReviewIndex] = useState(0);


  useEffect(() => {
    let slideInterval: NodeJS.Timeout;
    
    slideInterval = setInterval(() => {
      setReviewIndex(prev => (prev === REVIEWS.length - 3 ? 0 : prev + 1));
    }, 3000);

    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, []);

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


  const handleReviewSlide = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setReviewIndex(prev => (prev === 0 ? REVIEWS.length - 3 : prev - 1));
    } else {
      setReviewIndex(prev => (prev === REVIEWS.length - 3 ? 0 : prev + 1));
    }
  };


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
                <MainSection className="section sec01">
                  <ContentWrapper className="inner">
                    <TextContent>
                      <Typography variant="h1" gutterBottom>
                        아이의 호기심을<br />
                        채워주는 <span className="highlight">AI</span> 소리펜
                      </Typography>
                      <img src="/images/main_tit.png" alt="POKORO" className="pokoro-logo" />
                    </TextContent>
                    <img src="/images/pokoro-device.png" alt="POKORO AI 소리펜" className="pokoro-device" />
                    <FloatingImage src="/images/calculator.png" alt="계산기" top="-6%" left="-14%" />
                    <FloatingImage src="/images/magnifier.png" alt="돋보기" top="15%" right="43%" />
                    <FloatingImage src="/images/pencil.png" alt="연필" bottom="-6%" left="-25%"/>
                    <FloatingImage src="/images/rocket.png" alt="로켓" top="-12%" right="-21%"/>
                    <FloatingImage src="/images/megaphone.png" alt="확성기" bottom="9%" right="36%" />
                  </ContentWrapper>
                  <ScrollIndicator onClick={() => fullpageApi.moveSectionDown()}>
                    <span>Scroll Down</span>
                  </ScrollIndicator>
                </MainSection>

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

                <Section className="section sec05">
                  <AutoSlide />
                </Section>
                
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

                <Section className="section sec07">
                  <BrandSection>
                    <BrandTextBox className="inner">
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
                          <BrandList data-rolling-time="2000">
                            <motion.li
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              data-img="/images/sec07_img01.png"
                              className={activeImage === '/images/sec07_img01.png' ? 'on' : ''}
                            >
                              <BrandItem 
                                href="#"
                                onMouseEnter={() => setActiveImage('/images/sec07_img01.png')}
                              >
                                <BrandItemContent>
                                  <dt>
                                    <span className="icon" style={{ backgroundImage: "url('/images/sec07_ico01.svg')" }} />
                                  </dt>
                                  <dd>
                                    <Typography variant='h4'>호기심 해결 </Typography>
                                    <Typography variant='h6'>궁금한 것들은 언제든지 물어보세요.</Typography>
                                  </dd>
                                </BrandItemContent>
                              </BrandItem>
                            </motion.li>
                            <motion.li
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              data-img="/images/sec07_img02.png"
                              className={activeImage === '/images/sec07_img02.png' ? 'on' : ''}
                            >
                              <BrandItem 
                                href="#"
                                onMouseEnter={() => setActiveImage('/images/sec07_img02.png')}
                              >
                                <BrandItemContent>
                                  <dt>
                                    <span className="icon" style={{ backgroundImage: "url('/images/sec07_ico02.svg')" }} />
                                  </dt>
                                  <dd>
                                    <Typography variant='h4'>외국어 대화</Typography>
                                    <Typography variant='h6'>영어, 중국어, 일본어로도 대화할 수 있어요.</Typography>
                                  </dd>
                                </BrandItemContent>
                              </BrandItem>
                            </motion.li>
                            <motion.li
                              initial={{ opacity: 0, x: -50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.6 }}
                              data-img="/images/sec07_img03.png"
                              className={activeImage === '/images/sec07_img03.png' ? 'on' : ''}
                            >
                              <BrandItem 
                                href="#"
                                onMouseEnter={() => setActiveImage('/images/sec07_img03.png')}
                              >
                                <BrandItemContent>
                                  <dt>
                                    <span className="icon" style={{ backgroundImage: "url('/images/sec07_ico03.svg')" }} />
                                  </dt>
                                  <dd>
                                    <Typography variant='h4'>자유로운 대화</Typography>
                                    <Typography variant='h6'>포코로와 어떤 대화를 해야할지 모르겠을 땐<br/>말놀이 카드의 도움을 받아보세요.</Typography>
                                  </dd>
                                </BrandItemContent>
                              </BrandItem>
                            </motion.li>
                          </BrandList>
                        </div>
                      </div>
                    </BrandTextBox>
                    <BrandImageBox>
                      <div className="inner-box">
                        <div 
                          className="img-wrap" 
                          style={{ backgroundImage: `url('${activeImage}')` }} 
                        />
                      </div>
                    </BrandImageBox>
                  </BrandSection>
                </Section>
                
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

                <Section className="section sec10">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={fadeInUpVariants}
                  >
                    <Typography variant='h2'>포코로와 함께하는 학습,<br/>엄마들의 선택</Typography>
                  </motion.div>
                  <PokoroReview>
                    <Box className="review-container">
                      <Box 
                        className="review-slider" 
                        style={{
                          transform: `translateX(calc(-${reviewIndex * 574}px))`,
                        }}
                      >
                        {REVIEWS.map((review, index) => (
                          <Box 
                            key={review.id} 
                            className="review-card"
                            style={{
                              opacity: index >= reviewIndex && index < reviewIndex + 3 ? 1 : 0.3,
                              transform: index >= reviewIndex && index < reviewIndex + 3 ? 'scale(1)' : 'scale(0.85)',
                              transition: 'all 0.5s ease-in-out'
                            }}
                          >
                            <Box className="user-info">
                              <Box className="profile-image">
                                <img src={review.image} alt="프로필 이미지" />
                              </Box>
                              <Box className="user-detail">
                                <Typography variant='h5'>{review.username}</Typography>
                                <Typography variant='h5'>{review.rating}</Typography>
                              </Box>
                            </Box>
                            <Typography variant='h6' className="review-text">{review.text}</Typography>
                          </Box>
                        ))}
                      </Box>
                      <Box className="arrow-button prev" onClick={() => handleReviewSlide('prev')}>
                        <Icon icon="lets-icons:arrow-left-light" />
                      </Box>
                      <Box className="arrow-button next" onClick={() => handleReviewSlide('next')}>
                        <Icon icon="lets-icons:arrow-right-light" />
                      </Box>
                    </Box>
                  </PokoroReview>
                </Section>

                <Section className="section sec11">
                  <PurchaseSection>
                    <Box className="button-container">
                      <PurchaseButton href="#">
                        <img src="/images/sec11_ico01.svg" alt="장바구니" />
                        포코로 구매하기
                      </PurchaseButton>
                      <PurchaseButton href="#">
                        <img src="/images/sec11_ico02.svg" alt="헤드셋" />
                        비지니스 문의
                      </PurchaseButton>
                    </Box>
                    <GoToTopButton onClick={() => fullpageApi.moveTo(1)}>
                      <img src="/images/upto_ico.svg" alt="위로 가기" />
                      <span>Go To Up</span>
                    </GoToTopButton>
                  </PurchaseSection>
                </Section>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App; 