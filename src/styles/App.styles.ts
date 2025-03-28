import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Box, Stack } from '@mui/material';

const float1 = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(10px, 10px); }
  100% { transform: translate(0, 0); }
`;

const float2 = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 15px); }
  100% { transform: translate(0, 0); }
`;

const float3 = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(15px, -10px); }
  100% { transform: translate(0, 0); }
`;

const ttyong1 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  25% { transform: translate(10px, -15px) rotate(15deg) scale(1.1); }
  50% { transform: translate(0, -20px) rotate(0deg) scale(1); }
  75% { transform: translate(-10px, -15px) rotate(-15deg) scale(1.1); }
  100% { transform: translate(0, 0) rotate(0deg) scale(1); }
`;

const ttyong2 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  25% { transform: translate(-15px, -10px) rotate(-20deg) scale(1.1); }
  50% { transform: translate(0, -15px) rotate(0deg) scale(1); }
  75% { transform: translate(15px, -10px) rotate(20deg) scale(1.1); }
  100% { transform: translate(0, 0) rotate(0deg) scale(1); }
`;

const ttyong3 = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  25% { transform: translate(15px, -20px) rotate(25deg) scale(1.1); }
  50% { transform: translate(0, -25px) rotate(0deg) scale(1); }
  75% { transform: translate(-15px, -20px) rotate(-25deg) scale(1.1); }
  100% { transform: translate(0, 0) rotate(0deg) scale(1); }
`;

const fadeInUp = keyframes`
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
`;

export const AppContainer = styled.div`
  height: 100vh;
`;

export const Section = styled(Stack)`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
   gap: 100px;
  & .MuiTypography-root {
    position: relative;
  }
  & .inner{width: 1400px;}
  &.sec02 {
    background: linear-gradient(0deg, #FFFAE1 0%, #FFFFFF 60%);
  }
  &.sec03 {
    background:#fffae1;
  }
  &.sec04 {
    background:url('/images/sec04_bg.png') no-repeat center, linear-gradient(180deg, #FFFAE1 0%, #FFFFFF 60%);
  }
  &.sec05 {
    background: #Fdd751 url('/images/sec05_bg.png') no-repeat center / cover;
  }
  &.sec09{
    background: #fff url('/images/sec09_bg.png') no-repeat center / cover;
  }
  &.sec10{
    background: #FFFCF0;
  }
  &.sec11{
    background: #FDD751;
    padding: 100px 0;
    height: auto;
  }
`;

export const MainSection = styled(Section)`
  background: url('/images/main_bg.png') no-repeat top right,
              linear-gradient(180deg, #FFFAE1 0%, #FFFFFF 100%);
  background-size: 80%;
  position: relative;
`;


export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > img.pokoro-device {
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  .highlight {
    background: #FF6B6B;
    color: #FFFFFF;
    border-radius: 100px;
    padding:0 24px;
  }
`;

export const FloatingImage = styled.img<{ top?: string; left?: string; right?: string; bottom?: string; width?: string }>`
  position: absolute;
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ width }) => width && `width: ${width};`}
  
  &:nth-of-type(1) {
    animation: ${float1} 4s ease-in-out infinite;
  }
  &:nth-of-type(2) {
    animation: ${float2} 5s ease-in-out infinite;
  }
  &:nth-of-type(3) {
    animation: ${float3} 4.5s ease-in-out infinite;
  }
  &:nth-of-type(4) {
    animation: ${float2} 5.5s ease-in-out infinite;
  }
  &:nth-of-type(5) {
    animation: ${float1} 6s ease-in-out infinite;
  }

  /* sec03의 물음표 이미지들 */
  .sec03 & {
    &:nth-of-type(1) {
      animation: ${ttyong1} 3s ease-in-out infinite;
    }
    &:nth-of-type(2) {
      animation: ${ttyong2} 3.5s ease-in-out infinite;
    }
    &:nth-of-type(3) {
      animation: ${ttyong3} 3.2s ease-in-out infinite;
    }
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #8F8F8F;
    border-radius: 50%;
    animation: scrollBounce 1.5s ease-in-out infinite;
  }

  &::after {
    content: '';
    color: #666;
    width: 26px;
    height: 40px;
    border: 1px solid #8F8F8F;
    border-radius: 100px;
    position: absolute;
    top: -9px;
  }

  span {
    color: #8F8F8F;
    font-size: 14px;
    letter-spacing: 0.2em;
    margin-top: 24px;
  }

  @keyframes scrollBounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

/* sec02 */
export const BubbleContainer = styled(Box)`
  position: relative;
  width: 1600px;
  height: 800px;
`;

interface QuestionBubbleProps {
  delay: number;
  top: number;
  left: number;
  transform: string;
  isRed?: boolean;
  isRowOpacity?: boolean;
  isRowOpacity2?: boolean;
}
export const QuestionBubble = styled(Box)<QuestionBubbleProps>`
  position: absolute;
  display: inline-block;
  padding: 8px 60px;
  background: ${props => props.isRed ? '#FDD751' : '#FFE999'};
  border-radius: 100px;
  font-size: 60px;
  font-weight: 600;
  color: #333;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  transform: ${props => props.transform};
  opacity: ${props => {
    if (props.isRowOpacity) return '0.2';
    if (props.isRowOpacity2) return '0.5';
    return '0.8';
  }};
  white-space: nowrap;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  visibility: hidden;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: ${props => props.delay}s;

  &:nth-child(3n) {
    animation-duration: 3s;
  }
`;

/* sec04 */
export const DeviceTada = styled(Box)`
  text-align: center;
  & img{
    height: 70vh;
  }
  & .MuiTypography-root {
    position: relative;
    left: 50%;
    transform: translate(-50%,-350%);
    background: rgba(255,255,255,0.8);
    white-space: nowrap;
  }
`;

/* sec06 */
export const BenefitGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 1rem;
`;

export const BenefitCard = styled(motion.div)`
  position: relative;
  background: #fff;
  border-radius: 1rem;
  padding: 2.5rem;
  height: 550px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  p {
    font-size: 1.25rem;
    line-height: 1.4;
    color: #1e1e1e;
    margin-bottom: 0.5rem;
  }

  img {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

/* sec07 */
export const BrandSection = styled.div`
  background-color: #FFFCF0;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BrandTextBox = styled(Stack)`
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 2;
  height: 100%;

  & .MuiTypography-root{
    text-align: left;
  }

  .con-box {
    width: 50%;
  };

  .list-box {
    margin: 100px -35px 0 -65px;
  }
`;

export const BrandImageBox = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;

  .inner-box {
    position: relative;
    height: 100%;
  }

  .img-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    background: no-repeat center / cover;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: scale(0.95);

    &[style] {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const BrandItem = styled.a`
  position: relative;
  display: block;
  padding: 39px 126px 39px 65px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FDD751;
    border-radius: 20px;
    opacity: 0;
    transition: all 0.3s;
    box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.19);
  }

  &:hover {
    &:before {
      opacity: 1;
    }

    dl {
      left: 0;
    }
  }
`;

export const BrandList = styled.ul`
  li {
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }

    &.on {
      ${BrandItem} {
        &:before {
          opacity: 1;
        }

        dl {
          left: 0;
        }
      }
    }
  }
`;

export const BrandItemContent = styled.dl`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
  transition: all 0.4s;
  z-index: 1;

  dt {
    position: relative;
    width: 83px;
    height: 93px;
    margin-right: 35px;
  }

  .icon {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: no-repeat center;
    transition: all 0.3s;
    background-size: contain;
  }

  dd {
    width: calc(100% - 83px - 35px);
  }
`;


/* sec08 */
export const PokoroInfo = styled(Stack)`
  position: relative;
  width: 100%;
  max-width: 1200px;
  background: #fff;
  align-items: center;
  justify-content: center;

  .device-image{
    margin-left: 70px;
  }

  .feature-point {
    position: absolute;
    display: flex;

    /* 공통 스타일 */
    & > div {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* 왼쪽 feature points */
    ${[2, 3, 4].map(n => `
      &:nth-child(${n}) {
        left: 0;
        align-items: flex-start;
        & > div {
          align-items: flex-start;
        }
      }
    `).join('')}

    /* 오른쪽 feature points */
    ${[5, 6, 7].map(n => `
      &:nth-child(${n}) {
        right: 0;
        align-items: flex-end;
        & > div {
          align-items: flex-end;
          text-align: right;
        }
      }
    `).join('')}

    /* 위치 지정 */
    &:nth-child(2) { top: 0; }
    &:nth-child(3) { top: 200px; }
    &:nth-child(4) { bottom: 80px; }
    &:nth-child(5) { top: 30px; }
    &:nth-child(6) { top: 270px; }
    &:nth-child(7) { bottom: 40px; }

    .title {
      border-bottom: 4px solid #1e1e1e;
      display: flex;
      align-items: center;
      gap: 12px;
      padding-bottom: 8px;

      .icon {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #1e1e1e;
      }
    }

    img {
      position: absolute;
      &[src*="Info_line01.svg"] { top: 41px; }
      &[src*="Info_line02.svg"] { top: 27px; }
      &[src*="Info_line03.svg"] { top: 42px; }
      &[src*="Info_line04.svg"] { top: 27px; right:0; }
      &[src*="Info_line05.svg"] { top: 27px; right:0; }
      &[src*="Info_line06.svg"] { top: -64px; right:0; }
    }
  }
`;

/* sec09 */
export const AppDetail = styled(Box)`
  position: relative;
  padding: 0 20px;

  .app-preview {
    width: 100%;
    position: relative;
    overflow: hidden;

    .phone-container {
      position: relative;
      gap: 30px;
      align-items: center;
      
      & .device-image {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        &:before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background:#fff;
          
        }
      }

      & .arrow {
        position: absolute;
        cursor: pointer;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;
        transition: all 0.3s ease;
        opacity: 0.7;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
        
        &:hover {
          opacity: 1;
          transform: translateY(-50%) scale(1.1);
        }
        
        &.right {
          right: 125px;
        }
        &.left {
          left: 125px;
        }
      }
    }
  }
`;

/* sec10 */
export const PokoroReview = styled(Stack)`
  width: 100%;
  align-items: center;

  .review-container {
    width: 100%;
    height: 656px;
    position: relative;
    overflow: hidden;
  }

  .review-slider {
    display: flex;
    gap: 40px;
    position: absolute;
    left: 0;
    padding: 0 10%;
    transition: transform 0.5s ease-in-out;
  }

  .review-card {
    width: 534px;
    height: 656px;
    background: #fff;
    border: 3px solid #FFD751;
    border-radius: 50px;
    padding: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    flex-shrink: 0;

    .user-info {
      display: flex;
      gap: 15px;
      align-items: center;

      .profile-image {
        width: 146px;
        height: 146px;
        border-radius: 50%;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .user-detail {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 17.5px;
      }
    }
    .review-text{
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 11;
      -webkit-box-orient: vertical;
      word-break: keep-all;
    }
  }

  .arrow-button {
    width: 90px;
    height: 90px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 2;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    
    &:hover {
      background: #FFD751;
      svg {
        fill: #fff;
      }
    }
    
    &.prev {
      left: 20px;
    }
    
    &.next {
      right: 20px;
    }

    svg {
      width: 90px;
      height: 90px;
      fill: #FFD751;
      transition: fill 0.3s ease;
    }
  }
`;

/* sec11 */
export const PurchaseSection = styled(Stack)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 60px;

  .button-container {
    display: flex;
    gap: 60px;
  }
`;

export const PurchaseButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 24px 60px;
  border-radius: 100px;
  width: 490px;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  background: #fff;
  color: #121212;
`;

export const GoToTopButton = styled.button`
  position: absolute;
  top: 24px;
  right: 160px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  transition: all 0.3s ease;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  span {
    font-size: 14px;
    color: #333;
    font-weight: 700;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;