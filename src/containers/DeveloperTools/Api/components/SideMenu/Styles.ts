import styled, {css} from 'styled-components';

import {Icon as SharedIcon} from '@thenewboston/ui';
import {Link as SharedLink} from 'react-router-dom';
import colors from 'styles/colors';
import * as fontWeights from 'styles/fonts/fontWeights';
import {topNavButton} from 'styles/mixins';

export const Container = styled.div``;

export const Section = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SectionHeader = styled.button<{isActive: boolean}>`
  ${topNavButton};
  display: flex;
  ${fontWeights.fontWeightMedium};
  justify-content: space-between;
  padding: 0;
  text-align: left;
  width: 100%;

  ${({isActive}) =>
    isActive &&
    css`
      color: ${colors.palette.gray['900']};
      ${fontWeights.fontWeightBold};
    `}
`;

// React shows console warnings if we utilise prop name of `isActive` with
// type 'boolean', using all lowercase with string type is fine for custom prop
export const Link = styled(SharedLink)<{isactive: string}>`
  color: ${colors.palette.gray['400']};
  cursor: pointer;
  display: block;
  ${fontWeights.fontWeightMedium};

  &:hover {
    color: ${colors.palette.gray['900']};
  }

  &:not(:last-child) {
    margin: 8px 0;
  }

  ${({isactive}) =>
    isactive === 'true' &&
    css`
      color: ${colors.palette.gray['900']};
    `}
`;

export const Icon = styled(SharedIcon)`
  align-self: flex-start;
`;
