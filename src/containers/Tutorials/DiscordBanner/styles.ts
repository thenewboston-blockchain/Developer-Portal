import styled from 'styled-components';
import colors from 'styles/colors';
import {d2, h2, h4} from 'styles/fonts';

export const Container = styled.div`
  align-items: center;
  background: ${colors.palette.neutral['050']};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 84px;
`;

export const Title = styled.h3`
  ${d2.semiBold};
  color: ${colors.palette.neutral['800']};
  line-height: 125%;
`;

export const Text = styled.p`
  ${h2.regular};
  color: ${colors.palette.neutral['600']};
  line-height: 140%;
  margin-bottom: 40px;
  margin-top: 8px;
`;

export const DiscordButton = styled.button`
  ${h4.bold}
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${colors.discord};
  cursor: pointer;
  display: flex;
  margin-right: 16px;
  min-width: 100px;
  outline: none;
  transition: 0.2s ease transform;

  &:hover {
    transform: scale(1.05);
  }
`;
