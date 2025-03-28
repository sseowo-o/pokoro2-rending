import styled from "styled-components";
import { Box } from "@mui/material";

/* sec04 */
export const DeviceTada = styled(Box)`
  text-align: center;
  & img{
    height: 70vh;
  }
  & .MuiTypography-root {
    position: relative;
    left: 50%;
    transform: translate(-50%,-350%);
    background: rgba(255,255,255,0.8);
    white-space: nowrap;
  }
`;