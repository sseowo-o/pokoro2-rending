import styled, { keyframes } from 'styled-components';

/* sec01 */
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


export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > img.pokoro-device {
    z-index: 1;
  }
  @media (max-width: 1600px) {
    & > img.pokoro-device {
      max-width: 250px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    & > img.pokoro-device {
      width: 35%;
      max-width: 250px;
    }
  }
`;

export const TextContent = styled.div`
  .highlight {
    background: #FF6B6B;
    color: #FFFFFF;
    border-radius: 100px;
    padding:0 24px;
  }

  .pokoro-logo {
    @media (max-width: 1600px) {
      width: 80%;
      max-width: 600px;
    }
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


  @media (max-width: 1200px) {
    &.main-item {
      &:nth-of-type(1) { top: 5%; left: 2%; }
      &:nth-of-type(2) { top: 15%; right: 35%; }
      &:nth-of-type(3) { bottom: 2%; left: 2%; }
      &:nth-of-type(4) { top: 0%; right: 1%; }
      &:nth-of-type(5) { bottom: 15%; right: 35%; }
    }
  }

  @media (max-width: 900px) {
    &.main-item {
      &:nth-of-type(1) { top: 6%; left: 5%;}
      &:nth-of-type(2) { top: 0%; right: 13%;}
      &:nth-of-type(3) { bottom: 29%; left: 5%;}
      &:nth-of-type(4) { top: 18%; right:-2%; width: 20%}
      &:nth-of-type(5) { bottom: 30%; right: 25%; width: 12%;}
    }
  }

  @media (max-width: 600px) {
    &.main-item {
      &:nth-of-type(1) { top: 6%; left: 4%;}
      &:nth-of-type(2) { top: 8%; right: 6%;}
      &:nth-of-type(3) { bottom: 57%; left: -3%;}
      &:nth-of-type(4) { top: 0%; right: 26%; }
      &:nth-of-type(5) { bottom: 57%; right: 12%;}
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

  @media (max-width: 768px) {
    bottom: 1rem;
    
    span {
      font-size: 12px;
      margin-top: 16px;
    }
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
