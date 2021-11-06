import styled from 'styled-components';
import colors from 'styles/colors';
import zIndex from 'styles/zIndex';
import {NAVBAR_HEIGHT} from 'constants/offsets';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
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
