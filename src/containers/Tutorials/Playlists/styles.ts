import styled from 'styled-components';

import {Container as BaseContainer} from 'components';

export const Container = styled(BaseContainer)`
  display: grid;
  grid-template-columns: 240px auto;
  height: 100%;

  @media (max-width: 1366px) {
    grid-template-columns: auto;
    grid-template-rows: fit-content(0) auto;
  }
`;

export const LeftMenu = styled.div`
  grid-column: 1 / span 1;

  @media (max-width: 1366px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  padding: 12px 48px 48px;

  @media (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
