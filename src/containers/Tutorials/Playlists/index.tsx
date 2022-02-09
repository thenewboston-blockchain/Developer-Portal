import React, {FC} from 'react';

import {PageTitle, Spacer} from 'components';
import {trendingTutorialsFilter} from 'constants/tutorials';
import {PlaylistType} from 'types/tutorials';

import PlaylistsSection from '../PlaylistsSection';
import TutorialsHero from '../TutorialsHero';

import * as S from './styles';

interface PlaylistsParams {
  category: string;
}

const Playlists: FC<PlaylistsParams> = ({category}) => {
  const renderPageTitle = () => (
    <PageTitle
      ogDescription={category ? `${category} Tutorials` : undefined}
      title={category ? `${category} Tutorials` : 'Tutorials'}
    />
  );

  if (category === trendingTutorialsFilter.title) {
    return (
      <>
        {renderPageTitle()}

        <S.Container>
          <Spacer size={32} />
          <TutorialsHero />
          <Spacer size={66} />

          <PlaylistsSection category={category} type={PlaylistType.mostRecent} />
          <Spacer size={60} />
          <PlaylistsSection category={category} type={PlaylistType.popular} />
        </S.Container>
      </>
    );
  }

  // other categories
  return (
    <>
      {renderPageTitle()}

      <S.Container>
        <Spacer size={32} />
        <PlaylistsSection category={category} />
      </S.Container>
    </>
  );
};

export default Playlists;
