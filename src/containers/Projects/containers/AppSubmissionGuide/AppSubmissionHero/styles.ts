import styled from 'styled-components';

import * as fonts from 'styles/fonts';
import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 512px;
  padding: 120px 32px;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    min-height: 434px;
    padding: 64px 32px;
  }
`;

export const Title = styled.h1`
  ${fonts.d1.bold};
  color: ${colors.white};
  margin-bottom: 24px;
  line-height: 1.3;
`;

export const Description = styled.h3`
  ${fonts.h3.regular};
  color: ${colors.white};
  line-height: 1.5;
  margin-bottom: 40px;
`;
