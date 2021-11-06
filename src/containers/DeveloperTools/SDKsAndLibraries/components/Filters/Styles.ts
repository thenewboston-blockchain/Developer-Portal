import styled from 'styled-components';

import colors from 'styles/colors';
import * as fonts from 'styles/fonts';
import * as fontWeights from 'styles/fonts/fontWeights';

export const Container = styled.div`
  min-width: 180px;
`;

export const Title = styled.h4`
  ${fonts.h4.bold};
  color: ${colors.palette.gray['900']};
  margin-bottom: 14px;
  text-transform: uppercase;
`;

export const Filter = styled.div<{selected: boolean}>`
  ${fonts.b3.regular};
  align-items: center;
  color: ${colors.palette.gray['500']};
  cursor: pointer;
  display: flex;
  margin-bottom: 8px;

  ${(props) =>
    props.selected &&
    `
    ${fontWeights.fontWeightBold};
    color: ${colors.palette.gray['900']};
  `};

  .Filters__filter-icon {
    margin-right: 4px;
  }
`;
