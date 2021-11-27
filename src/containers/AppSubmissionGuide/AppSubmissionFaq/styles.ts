import styled from 'styled-components';

import {Container as ContainerBase, FaqDropdownCard as DropdownCardBase} from 'components';
import * as fonts from 'styles/fonts';
import colors from 'styles/colors';

export const Container = styled(ContainerBase)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px;

  @media (max-width: 992px) {
    padding: 120px 48px;
  }

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

export const Title = styled.h1`
  ${fonts.d2.bold};
  color: ${colors.palette.neutral['800']};
  margin-bottom: 80px;
  text-align: center;

  @media (max-width: 768px) {
    ${fonts.h1.bold};
  }
`;

export const FaqDropdownCard = styled(DropdownCardBase)`
  margin-bottom: 24px;
  max-width: 834px;
  width: 834px;

  @media (max-width: 992px) {
    max-width: 100%;
    width: 100%;
  }
`;
