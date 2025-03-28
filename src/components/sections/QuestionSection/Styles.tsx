import styled, { keyframes } from 'styled-components';
import { Box } from '@mui/material';

/* sec02 */
const fadeInUp = keyframes`
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
`;


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
