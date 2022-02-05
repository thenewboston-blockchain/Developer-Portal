import styled from 'styled-components';
import colors from 'styles/colors';
import {d3, h3} from 'styles/fonts';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Player = styled.div`
  flex: 1;
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 48px;
`;

export const Heading = styled.h2`
  ${d3.bold}
  color: ${colors.palette.neutral['800']};
  margin-bottom: 24px;
  line-height: 130%;
`;

export const Paragraph = styled.p`
  ${h3.regular}
  color: ${colors.palette.neutral['600']};
  margin-bottom: 24px;
  line-height: 150%;
`;
