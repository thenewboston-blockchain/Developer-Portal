import styled, {css} from 'styled-components';
import colors from 'styles/colors';
import {h3} from 'styles/fonts';
import {Icon} from '@thenewboston/ui';

export const Container = styled.div<{isExpanded?: boolean}>`
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 0 24px 0 rgba(229, 234, 244, 0.58);
  min-height: 80px;
  padding: 24px;
  position: relative;

  ${({isExpanded}) =>
    isExpanded &&
    css`
      box-shadow: 0px 0px 24px 0px #e5eaf494;
    `}

  &:hover {
    box-shadow: 0px 0px 24px 0px #e5eaf494;
  }
`;

export const DropdownContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
  }
`;

export const ToggleIcon = styled(Icon)<{isExpanded?: boolean}>`
  color: #0085ff;
  outline: none;

  ${({isExpanded}) =>
    isExpanded &&
    css`
      color: ${colors.palette.gray['700']};
    `}

  &:focus {
    background-color: transparent;
  }
`;

export const Question = styled.div`
  ${h3.medium};
  color: ${colors.palette.gray['700']};
  cursor: pointer;
`;

const Answer = styled.div`
  ${h3.regular};
  color: ${colors.palette.gray['500']};
  display: none;
`;

export const ExpandedAnswer = styled(Answer)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
