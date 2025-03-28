import { motion } from "framer-motion";
import styled from "styled-components";

/* sec05 */
export const SlideContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const SlideItem = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;

export const SlideImage = styled.img`
  width: 100%;
  object-fit: cover;
  flex: 1;
`;

export const SlideTitle = styled.h3`
  font-size: 1.875rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #333;
  flex: 0.8;
`;

export const Pagination = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

export const PaginationDot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${({ active }) => active ? '#333' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ active }) => active ? '#333' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

export const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 120px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  ${({ direction }) => direction === 'left' ? 'left: 60px;' : 'right: 60px;'}
  opacity: 0.3;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    opacity: 1;
  }

  svg {
    width: 40px;
    height: 40px;
    color: #121212;
  }
`;