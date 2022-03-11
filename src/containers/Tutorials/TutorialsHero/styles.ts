import styled from 'styled-components';
import colors from 'styles/colors';
import {b1, d3, h1, h3} from 'styles/fonts';

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Player = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    margin-bottom: 32px;
    width: 100%;
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 48px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 0px;
  }
`;

export const Heading = styled.h2`
  ${d3.bold}
  color: ${colors.palette.neutral['800']};
  margin-bottom: 24px;
  line-height: 130%;

  @media (max-width: 1366px) {
    ${h1.bold}
  }

  @media (max-width: 768px) {
    ${d3.bold}
    margin-bottom: 16px;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  ${h3.regular}
  color: ${colors.palette.neutral['600']};
  margin-bottom: 24px;
  line-height: 150%;

  @media (max-width: 1366px) {
    ${b1.regular}
  }

  @media (max-width: 768px) {
    ${h3.regular}
    margin-bottom: 40px;
    margin-top: 0px;
    text-align: center;
  }
`;
