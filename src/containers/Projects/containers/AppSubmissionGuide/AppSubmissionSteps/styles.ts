import styled, {css} from 'styled-components';

import {Container as ContainerBase} from 'components';
import * as fonts from 'styles/fonts';
import colors from 'styles/colors';
import ArrowBase from './NavigationArrow';

export const Container = styled(ContainerBase)`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  min-height: 398px;
  position: relative;

  @media (max-width: 992px) {
    align-items: space-evenly;
    flex-direction: column;
    min-height: 768px;
    padding: 80px 40px;
  }

  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

export const StepCard = styled.div<{highlighted?: boolean}>`
  border: 1px solid ${colors.palette.neutral[100]};
  box-sizing: border-box;
  border-radius: 11px;
  cursor: pointer;
  max-width: 336px;
  min-height: 158px;
  padding: 34px 24px;
  transition: border 0.3s linear;

  ${({highlighted}) =>
    highlighted &&
    css`
      border: 1px solid #0085ff;
    `}

  &:hover {
    background-color: #f7fafc;
  }

  &:active {
    background-color: #f4f7f9;
  }

  @media (max-width: 1366px) {
    max-width: 266px;
  }

  @media (max-width: 992px) {
    max-width: 100%;
    min-height: 115px;
    width: 100%;
  }
`;

export const StepCardTitle = styled.h2`
  ${fonts.h2.bold};
  color: ${colors.palette.neutral[800]};
  margin-bottom: 8px;
`;

export const StepCardDescription = styled.h4`
  ${fonts.h4.light};
  color: ${colors.palette.neutral[600]};
`;

export const NavigationArrow = styled(ArrowBase)<{highlighted?: boolean}>`
  color: #c1cad2;
  ${({highlighted}) =>
    highlighted &&
    css`
      color: #0085ff;
    `}
  transition: color 0.3s linear;
  @media (max-width: 992px) {
    transform: rotate(90deg);
  }
`;
