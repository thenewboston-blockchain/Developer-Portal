import styled from 'styled-components';
import colors from 'styles/colors';
import zIndex from 'styles/zIndex';
import {BREADCRUMB_HEIGHT, NAVBAR_HEIGHT} from 'constants/offsets';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  max-height: calc(100vh - ${NAVBAR_HEIGHT - BREADCRUMB_HEIGHT}px);
  overflow-y: auto;
  padding: 32px 32px 32px 0;
  position: sticky;
  top: ${NAVBAR_HEIGHT + BREADCRUMB_HEIGHT}px;
  z-index: ${zIndex.devPortalSidemenu};

  @media (max-width: 1366px) {
    padding: 32px 48px;
    width: 312px;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  border-left: 1px solid ${colors.palette.gray['075']};
  width: 100%;

  @media (max-width: 992px) {
    border-left: none;
  }
`;

export const BreadcrumbContainer = styled.div`
  position: sticky;
  top: ${NAVBAR_HEIGHT}px;
  z-index: ${zIndex.devPortalBreadcrumb};
`;
