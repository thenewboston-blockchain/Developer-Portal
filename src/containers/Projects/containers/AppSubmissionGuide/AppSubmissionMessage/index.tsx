import React, {FC} from 'react';

import {URLS} from 'constants/routes';

import * as S from './styles';

const AppSubmissionMessage: FC = () => {
  return (
    <S.Container>
      <S.Description>
        Have an app idea and don’t want to build? Propose an{' '}
        <S.Link showNewWindowIcon={false} href={URLS.github.proposeIdeaOnly}>
          Idea Only
        </S.Link>{' '}
        App.
      </S.Description>
    </S.Container>
  );
};

export default AppSubmissionMessage;
