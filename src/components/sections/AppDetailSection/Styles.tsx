import { styled } from "styled-components";
import { Box } from "@mui/material";

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
