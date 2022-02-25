import React, {FC} from 'react';

import {PageTitle, Spacer} from 'components';
import {trendingTutorialsFilter} from 'constants/tutorials';
import {PlaylistType} from 'types/tutorials';
import {NavOption} from 'types/option';

import PlaylistsSection from '../PlaylistsSection';
import TutorialsHero from '../TutorialsHero';
import CategoryDropdown from '../components/CategoryDropdown';

import * as S from './styles';

interface PlaylistsParams {
  selectedCategory: string;
  categories: NavOption[];
}

const Playlists: FC<PlaylistsParams> = ({selectedCategory, categories}) => {
  const renderPageTitle = () => (
    <PageTitle
      ogDescription={selectedCategory ? `${selectedCategory} Tutorials` : undefined}
      title={selectedCategory ? `${selectedCategory} Tutorials` : 'Tutorials'}
    />
  );

  if (selectedCategory === trendingTutorialsFilter.title) {
    return (
      <>
        {renderPageTitle()}

        <S.Container>
          <Spacer size={32} />
          <TutorialsHero />
          <Spacer size={66} />

          <CategoryDropdown categories={categories} />

          <PlaylistsSection category={selectedCategory} type={PlaylistType.mostRecent} />
          <Spacer size={60} />
          <PlaylistsSection category={selectedCategory} type={PlaylistType.popular} />
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
        <CategoryDropdown categories={categories} />
        <PlaylistsSection category={selectedCategory} />
      </S.Container>
    </>
  );
};

export default Playlists;
