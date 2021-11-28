import styled from 'styled-components';

import {A} from 'components';
import * as fonts from 'styles/fonts';
import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  display: flex;
  background-color: ${colors.palette.neutral['050']};
  justify-content: center;
  min-height: 132px;
  text-align: center;

  @media (max-width: 992px) {
    min-height: 100px;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const Description = styled.h3`
  ${fonts.h3.regular};
  color: ${colors.palette.neutral['900']};
  line-height: 1.5;
`;

export const Link = styled(A)`
  color: #0085ff;
`;
