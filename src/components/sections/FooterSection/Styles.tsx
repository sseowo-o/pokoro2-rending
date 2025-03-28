import { styled } from "styled-components";
import { Stack } from "@mui/material";

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