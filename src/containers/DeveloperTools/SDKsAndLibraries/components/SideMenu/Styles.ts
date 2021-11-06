import styled from 'styled-components';

import {BREADCRUMB_HEIGHT, NAVBAR_HEIGHT} from 'constants/offsets';
import zIndex from 'styles/zIndex';

export const Container = styled.div`
  padding: 32px 32px 32px 0;
  position: sticky;
  top: ${BREADCRUMB_HEIGHT + NAVBAR_HEIGHT}px;
  width: 256px;
  z-index: ${zIndex.devPortalSidemenu};

  @media (max-width: 1366px) {
    padding: 32px 48px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;
