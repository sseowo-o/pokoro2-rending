import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Box, Stack } from '@mui/material';

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
  & .inner{
  width: 1400px;
    @media (max-width: 1600px) {
      width: 90%;
    }
  }
  &.sec01{
    background: url('/images/main_bg.png') no-repeat top right,
              linear-gradient(180deg, #FFFAE1 0%, #FFFFFF 100%);
    background-size: 80%;
  }
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

export const FloatingImage = styled.img<{ top?: string; left?: string; right?: string; bottom?: string; width?: string }>`
  position: absolute;
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ width }) => width && `width: ${width};`}
  
  @media (max-width: 1600px) {
    &.main-item {
      width: 15%;
      object-fit:scale-down;
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


