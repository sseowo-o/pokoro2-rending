import React from 'react';
import { Box} from '@mui/material';
import { fullpageApi } from '@fullpage/react-fullpage';
import {Section} from '../../../styles/App.styles';
import {
  PurchaseSection,
  PurchaseButton,
  GoToTopButton,
} from './Styles';

interface FooterSectionProps {
  fullpageApi: fullpageApi;
}

const FooterSection: React.FC<FooterSectionProps> = ({ fullpageApi }) => {
  return (
    <Section className="section sec11">
      <PurchaseSection>
        <Box className="button-container">
          <PurchaseButton href="#">
            <img src="/images/sec11_ico01.svg" alt="장바구니" />
            포코로 구매하기
          </PurchaseButton>
          <PurchaseButton href="#">
            <img src="/images/sec11_ico02.svg" alt="헤드셋" />
            비지니스 문의
          </PurchaseButton>
        </Box>
        <GoToTopButton onClick={() => fullpageApi.moveTo(1)}>
          <img src="/images/upto_ico.svg" alt="위로 가기" />
          <span>Go To Up</span>
        </GoToTopButton>
      </PurchaseSection>
    </Section>
  );
};

export default FooterSection; 