import React, {FC} from 'react';

import {PageTitle, Spacer} from 'components';
import {PlaylistType} from 'types/tutorials';

import PlaylistsSection from '../PlaylistsSection';
import TutorialsHero from '../TutorialsHero';

import * as S from './styles';

interface PlaylistsParams {
  category: string;
}

const Playlists: FC<PlaylistsParams> = ({category}) => {
  return (
    <>
      <PageTitle
        ogDescription={category ? `${category} Tutorials` : undefined}
        title={category ? `${category} Tutorials` : 'Tutorials'}
      />

      <S.Container>
        <TutorialsHero />
        <Spacer size={66} />

        <PlaylistsSection category={category} type={PlaylistType.mostRecent} />
        <Spacer size={60} />
        <PlaylistsSection category={category} type={PlaylistType.popular} />
      </S.Container>
    </>
  );
};

export default Playlists;
