import React, {FC} from 'react';
import {useHistory} from 'react-router';

import {Button} from 'components';
import {ROUTES} from 'constants/routes';

import * as S from './styles';

const AppSubmissionHero: FC = () => {
  const history = useHistory();
  return (
    <S.Container>
      <S.Title>App Submission Guide</S.Title>
      <S.Description>
        Easy guide to propose an App on thenewboston network <br />
        You can earn TNB coins by completing your approved App
      </S.Description>
      <Button color="quaternary" onClick={() => history.push(ROUTES.projects.rules)}>
        Rules & Guidelines
      </Button>
    </S.Container>
  );
};

export default AppSubmissionHero;
