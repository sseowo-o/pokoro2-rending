import { motion } from "framer-motion";
import { styled } from "styled-components";

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
