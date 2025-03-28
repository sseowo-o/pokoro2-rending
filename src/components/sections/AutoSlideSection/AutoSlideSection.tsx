import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Section } from '../../../styles/App.styles';
import { SlideContainer, SlideWrapper, SlideItem, SlideImage, SlideTitle, Pagination, PaginationDot, ArrowButton } from './Styles';


interface SlideData {
  id: number;
  image: string;
  title: JSX.Element;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: '/images/sec05_slide01.png',
    title: <>포코로는<br /><span style={{color: '#FE536B', fontSize: '40px'}}>'아이들의 끝없는 호기심을 해결해주자'</span><br />라는 생각에서 시작되었습니다.</>,
  },
  {
    id: 2,
    image: '/images/sec05_slide02.png',
    title: <>화면을 통해 일방적으로 정보를 받는<br />수동적인 방식이 아니라,<p style={{color: '#FE536B', fontSize: '40px'}}>'묻고, 듣고, 다시 묻는'</p>양방향 소통을 통해 호기심을 해결하고<br />정보를 제공하여 아이의 인지 발달을 돕습니다</>,
  },
  {
    id: 3,
    image: '/images/sec05_slide03.png',
    title: (
      <>
        Q&A 방식으로 작동하는 포코로는<br />
        아이의 자연스러운 호기심을 자극하여<br />
        스스로 <span style={{color: '#FE536B', fontSize: '40px'}}>'왜'</span>와 <span style={{color: '#FE536B', fontSize: '40px'}}>'어떻게'</span>를 탐구하도록 돕습니다.<br />
        그 과정에서<span style={{color: '#FE536B', fontSize: '40px'}}>'자기주도 학습 능력'</span>도 자라납니다.
      </>
    ),
  },
];

const slideVariants = {
  enter: {
    opacity: 0,
    scale: 0.8,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  }
};

const AutoSlide: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="section sec05">
      <SlideContainer>
      <SlideWrapper>
          <AnimatePresence mode="wait">
          <SlideItem
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
          >
              <SlideImage src={slides[currentIndex].image} alt={slides[currentIndex].title.toString()} />
              <SlideTitle>{slides[currentIndex].title}</SlideTitle>
          </SlideItem>
          </AnimatePresence>
      </SlideWrapper>
      <ArrowButton direction="left" onClick={goToPrevSlide}>
          <Icon icon="oui:arrow-left" />
      </ArrowButton>
      <ArrowButton direction="right" onClick={goToNextSlide}>
          <Icon icon="oui:arrow-right" />
      </ArrowButton>
      <Pagination>
          {slides.map((_, index) => (
          <PaginationDot
              key={index}
              active={currentIndex === index}
              onClick={() => goToSlide(index)}
          />
          ))}
      </Pagination>
      </SlideContainer>
    </Section>
  );
};

export default AutoSlide; 