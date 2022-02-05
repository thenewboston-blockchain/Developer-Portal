import styled from 'styled-components';

import colors from 'styles/colors';
import {h1} from 'styles/fonts';

export const Container = styled.div``;

export const Title = styled.h3`
  ${h1.bold}
  color: ${colors.palette.neutral['700']};
  margin-bottom: 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 36px;
`;
