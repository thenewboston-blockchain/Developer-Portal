import React, {FC} from 'react';

import {Language} from 'types/developer-tools';

import Filters from '../Filters';

import * as S from './Styles';

type Props = {
  selectedLanguages: string[];
  toggleLanguage: (language: Language) => void;
};

const SideMenu: FC<Props> = ({selectedLanguages, toggleLanguage}) => {
  return (
    <S.Container>
      <Filters selectedLanguages={selectedLanguages} toggleLanguage={toggleLanguage} />
    </S.Container>
  );
};

export default SideMenu;
