import React, {FC, ReactNode} from 'react';

import {Container, Divider, PageTitle} from 'components';
import Breadcrumb from '../Breadcrumb';

import * as S from './Styles';

type Props = {
  children: ReactNode;
  pageName: string;
};

const Layout: FC<Props> = ({children, pageName}) => {
  return (
    <>
      <PageTitle title={pageName} />
      <S.BreadcrumbContainer>
        <Container>
          <Breadcrumb />
        </Container>
        <Divider />
      </S.BreadcrumbContainer>
      <Container>
        <S.MainContainer>
          <S.RightContainer>{children}</S.RightContainer>
        </S.MainContainer>
      </Container>
    </>
  );
};

export default Layout;
