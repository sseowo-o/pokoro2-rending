import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import {Section} from '../../../styles/App.styles';
import {PokoroReview} from './Styles';
import { 
  fadeInUpVariants, 
} from '../../../styles/animationVariants';



const anchors = ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage'];

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

const ReviewSection: React.FC = () => {
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
  );
};

export default ReviewSection; 