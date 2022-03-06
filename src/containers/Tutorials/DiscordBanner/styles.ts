import styled, {css} from 'styled-components';

import colors from 'styles/colors';
import {b1, d2, d3, h1, h2, h3, h4} from 'styles/fonts';

type Props = {
  variant?: 'small' | 'large';
};

export const Container = styled.div<Props>`
  align-items: center;
  background: ${colors.palette.neutral['050']};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 24px;
  padding: 84px 0px;

  ${({variant}) =>
    variant === 'small' &&
    css`
      margin: 0;
      padding: 32px 0px;
    `}
`;

export const Title = styled.h3<Props>`
  ${d2.semiBold};
  color: ${colors.palette.neutral['800']};
  line-height: 125%;

  @media (max-width: 786px) {
    ${d3.bold}
  }

  ${({variant}) =>
    variant === 'small' &&
    css`
      ${h1.semiBold}

      @media (max-width: 786px) {
        ${h1.semiBold}
      }
    `}
`;

export const Text = styled.p<Props>`
  ${h2.regular};
  color: ${colors.palette.neutral['600']};
  line-height: 140%;
  margin-bottom: 40px;
  margin-top: 8px;

  @media (max-width: 786px) {
    ${h3.regular}
  }

  ${({variant}) =>
    variant === 'small' &&
    css`
      ${b1.regular}
      margin-bottom: 36px;
    `}
`;

export const DiscordButton = styled.button`
  ${h4.bold}
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${colors.discord};
  cursor: pointer;
  display: flex;
  min-width: 100px;
  outline: none;
  transition: 0.2s ease transform;

  &:hover {
    transform: scale(1.05);
  }
`;
