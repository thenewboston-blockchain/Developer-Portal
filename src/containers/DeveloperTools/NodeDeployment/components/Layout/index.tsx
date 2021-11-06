import React, {FC, ReactNode, useState} from 'react';

import {Container, Divider, PageTitle} from 'components';
import {BREADCRUMB_HEIGHT} from 'constants/offsets';
import Measure from 'react-measure';
import Breadcrumb from '../Breadcrumb';
import SideMenu from '../SideMenu';

import * as S from './Styles';

type Props = {
  children: ReactNode;
  pageName: string;
};

const Layout: FC<Props> = ({children, pageName}) => {
  const [breadcrumbHeight, setBreadcrumbHeight] = useState(BREADCRUMB_HEIGHT);
  return (
    <>
      <PageTitle title={pageName} />
      <Measure bounds onResize={(contentRect) => setBreadcrumbHeight(contentRect?.bounds?.height || 0)}>
        {({measureRef}) => (
          <S.BreadcrumbContainer ref={measureRef}>
            <Container>
              <Breadcrumb />
            </Container>
            <Divider />
          </S.BreadcrumbContainer>
        )}
      </Measure>
      <Container>
        <S.MainContainer>
          <S.LeftContainer>
            <SideMenu breadcrumbHeight={breadcrumbHeight} />
          </S.LeftContainer>
          <S.RightContainer>{children}</S.RightContainer>
        </S.MainContainer>
      </Container>
    </>
  );
};

export default Layout;
