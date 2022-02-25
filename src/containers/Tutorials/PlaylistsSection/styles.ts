import styled from 'styled-components';

import colors from 'styles/colors';
import {h1, h2} from 'styles/fonts';

export const Container = styled.div``;

export const Title = styled.h3`
  ${h1.bold}
  color: ${colors.palette.neutral['700']};
  margin-bottom: 24px;

  @media (max-width: 786px) {
    ${h2.bold}
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 48px;

  @media (max-width: 1366px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 414px) {
    grid-template-columns: auto;
  }
`;
