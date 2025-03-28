import styled, { keyframes } from 'styled-components';

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


export const FloatingImage = styled.img<{ top?: string; left?: string; right?: string; bottom?: string; width?: string }>`
  position: absolute;
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ width }) => width && `width: ${width};`}

  &:nth-of-type(1) {
    animation: ${ttyong1} 3s ease-in-out infinite;
  }
  &:nth-of-type(2) {
    animation: ${ttyong2} 3.5s ease-in-out infinite;
  }
  &:nth-of-type(3) {
    animation: ${ttyong3} 3.2s ease-in-out infinite;
  }
`; 