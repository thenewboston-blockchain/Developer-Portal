import styled from 'styled-components';

import {Icon as SharedIcon} from '@thenewboston/ui';
import {BREADCRUMB_HEIGHT} from 'constants/offsets';
import colors from 'styles/colors';

export const Container = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  min-height: ${BREADCRUMB_HEIGHT}px;

  @media (max-width: 1366px) {
    padding: 0 48px;
  }

  @media (max-width: 992px) {
    padding: 12px 24px;
  }
`;

export const Icon = styled(SharedIcon)`
  color: ${colors.palette.gray['400']};
  cursor: pointer;
  margin-left: 8px;
`;
