import React from 'react';
import {useHistory} from 'react-router-dom';

import {Button, VideoPlayer} from 'components';
import {ROUTES} from 'constants/routes';
import {Source} from 'types/tutorials';

import * as S from './styles';

const TutorialsHero = () => {
  const history = useHistory();

  return (
    <S.Container>
      <S.Player>
        <VideoPlayer source={Source.youtube} videoId="_0MZF8Z4tRg" />
      </S.Player>
      <S.Content>
        <S.Heading>Explore thousands of tutorials to learn in-demand skills</S.Heading>
        <S.Paragraph>
          Watch free coding tutorials created by thenewboston YouTube channel to help you develop apps in any language
          and earn TNBC.
        </S.Paragraph>
        <Button color="quaternary" onClick={() => history.push(ROUTES.projects.home)}>
          Learn How to Submit an App for TNBC {'-->'}{' '}
        </Button>
      </S.Content>
    </S.Container>
  );
};

export default TutorialsHero;
