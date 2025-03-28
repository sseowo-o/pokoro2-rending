import { styled } from "styled-components";
import { Stack } from "@mui/material";

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
