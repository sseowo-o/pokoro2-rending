import { Stack } from "@mui/material";
import { styled } from "styled-components";

/* sec07 */
export const ConversationWrap = styled.div`
  background-color: #FFFCF0;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ConversationTextBox = styled(Stack)`
  position: relative;
  align-items: center;
  justify-content: center;
  z-index: 2;
  height: 100%;

  & .MuiTypography-root{
    text-align: left;
  }

  .con-box {
    width: 50%;
  };

  .list-box {
    margin: 100px -35px 0 -65px;
  }
`;

export const ConversationImageBox = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;

  .inner-box {
    position: relative;
    height: 100%;
  }

  .img-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    background: no-repeat center / cover;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: scale(0.95);

    &[style] {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ConversationItem = styled.a`
  position: relative;
  display: block;
  padding: 39px 126px 39px 65px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FDD751;
    border-radius: 20px;
    opacity: 0;
    transition: all 0.3s;
    box-shadow: 10px 15px 20px rgba(0, 0, 0, 0.19);
  }

  &:hover {
    &:before {
      opacity: 1;
    }

    dl {
      left: 0;
    }
  }
`;

export const ConversationList = styled.ul`
  li {
    margin-top: 8px;
    &:first-child {
      margin-top: 0;
    }

    &.on {
      ${ConversationItem} {
        &:before {
          opacity: 1;
        }

        dl {
          left: 0;
        }
      }
    }
  }
`;

export const ConversationItemContent = styled.dl`
  display: flex;
  align-items: center;
  position: relative;
  left: -10px;
  transition: all 0.4s;
  z-index: 1;

  dt {
    position: relative;
    width: 83px;
    height: 93px;
    margin-right: 35px;
  }

  .icon {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: no-repeat center;
    transition: all 0.3s;
    background-size: contain;
  }

  dd {
    width: calc(100% - 83px - 35px);
  }
`;
