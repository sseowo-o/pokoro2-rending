import { styled } from "styled-components";
import { Stack } from "@mui/material";

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