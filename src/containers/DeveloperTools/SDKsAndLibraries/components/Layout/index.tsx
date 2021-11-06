import React, {FC, ReactNode, useState} from 'react';
import {Language} from 'types/developer-tools';

import {Container, Divider, PageTitle} from 'components';
import Breadcrumb from '../Breadcrumb';
import SideMenu from '../SideMenu';

import * as S from './Styles';

type Props = {
  children: (selectedLanguages: Language[]) => ReactNode;
  pageName: string;
};

const Layout: FC<Props> = ({children, pageName}) => {
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);

  const toggleLanguage = React.useCallback(
    (language: Language) => {
      if (selectedLanguages.includes(language)) {
        setSelectedLanguages(selectedLanguages.filter((l) => l !== language));
      } else {
        setSelectedLanguages([...selectedLanguages, language]);
      }
    },
    [selectedLanguages],
  );

  return (
    <>
      <PageTitle title={pageName} />
      <S.BreadcrumbContainer>
        <Container>
          <Breadcrumb selectedLanguages={selectedLanguages} toggleLanguage={toggleLanguage} />
        </Container>
        <Divider />
      </S.BreadcrumbContainer>
      <Container>
        <S.MainContainer>
          <SideMenu selectedLanguages={selectedLanguages} toggleLanguage={toggleLanguage} />
          <S.RightContainer>{children(selectedLanguages)}</S.RightContainer>
        </S.MainContainer>
      </Container>
    </>
  );
};

export default Layout;
