import React, {FC} from 'react';
import clsx from 'clsx';

import {Checkbox} from 'components/FormElements';
import {Language} from 'types/developer-tools';

import * as S from './Styles';

type Props = {
  selectedLanguages: string[];
  toggleLanguage: (language: Language) => void;
};

const Filters: FC<Props> = ({selectedLanguages, toggleLanguage}) => {
  const allLanguages = Object.values(Language);

  return (
    <S.Container>
      <S.Title>Language</S.Title>

      {allLanguages.map((language) => (
        <S.Filter
          selected={selectedLanguages.includes(language)}
          key={language}
          role="button"
          tabIndex={0}
          onClick={() => toggleLanguage(language)}
        >
          <Checkbox
            checked={selectedLanguages.includes(language)}
            className="Filters__filter-icon"
            value={language}
            size={18}
          />
          {language}
        </S.Filter>
      ))}
    </S.Container>
  );
};

export default Filters;
