import React, {FC} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {getPlaylistCategories} from 'apis/tutorials';
import {Container, ErrorMessage, FlatNavLinks, Loader, PageTitle, Spacer} from 'components';
import {ROUTES} from 'constants/routes';
import {trendingTutorialsFilter} from 'constants/tutorials';
import {PlaylistCategory, PlaylistType, TutorialsUrlParams} from 'types/tutorials';
import {NavOption} from 'types/option';

import PlaylistsSection from '../PlaylistsSection';
import DiscordBanner from '../DiscordBanner';
import TutorialsHero from '../TutorialsHero';
import CategoryDropdown from '../components/CategoryDropdown';

import * as S from './styles';

const Playlists: FC = () => {
  const history = useHistory();
  const {category: categoryParam} = useParams<TutorialsUrlParams>();

  const [loading, setLoading] = React.useState<boolean>(true);
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const [playlistCategories, setPlaylistCategories] = React.useState<NavOption[]>([]);
  const [playlistCategoryFilter, setPlaylistCategoryFilter] = React.useState<string>(trendingTutorialsFilter.title);

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const fetchedPlaylistCategories = await getPlaylistCategories();
        const updatedPlaylistCategories = fetchedPlaylistCategories.map((playlistCategory: PlaylistCategory) => ({
          pathname: playlistCategory.name,
          title: playlistCategory.name,
        }));
        updatedPlaylistCategories.unshift(trendingTutorialsFilter);
        setPlaylistCategories(updatedPlaylistCategories);
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    if (!loading) {
      if (playlistCategories.some((playlistCategory: NavOption) => playlistCategory.pathname === categoryParam)) {
        setPlaylistCategoryFilter(categoryParam);
      } else {
        history.replace(`${ROUTES.tutorials}/${trendingTutorialsFilter.pathname}`);
      }
    }
  }, [playlistCategories, loading, categoryParam, history]);

  const handleNavOptionClick = React.useCallback(
    (option: string) => (): void => {
      history.push(`${ROUTES.tutorials}/${option}`);
    },
    [history],
  );

  const renderCategoryFilter = (): React.ReactNode => {
    return (
      <FlatNavLinks
        handleOptionClick={handleNavOptionClick}
        options={playlistCategories}
        selectedOption={playlistCategoryFilter ?? trendingTutorialsFilter.title}
      />
    );
  };

  const renderPageTitle = () => (
    <PageTitle
      ogDescription={playlistCategoryFilter ? `${playlistCategoryFilter} Tutorials` : undefined}
      title={playlistCategoryFilter ? `${playlistCategoryFilter} Tutorials` : 'Tutorials'}
    />
  );

  const renderDiscordBanner = () => (
    <Container>
      <Spacer size={60} />
      <DiscordBanner />
      <Spacer size={120} />
    </Container>
  );

  if (loading) return <Loader />;

  if (errorMessage) return <ErrorMessage />;

  if (playlistCategoryFilter === trendingTutorialsFilter.title) {
    return (
      <>
        {renderPageTitle()}

        <S.Container>
          <S.LeftMenu>{renderCategoryFilter()}</S.LeftMenu>
          <S.RightContent>
            <Spacer size={32} />
            <TutorialsHero />
            <Spacer size={66} />

            <CategoryDropdown categories={playlistCategories} />

            <PlaylistsSection category={playlistCategoryFilter} type={PlaylistType.mostRecent} />
            <Spacer size={60} />
            <PlaylistsSection category={playlistCategoryFilter} type={PlaylistType.popular} />
          </S.RightContent>
        </S.Container>

        {renderDiscordBanner()}
      </>
    );
  }

  // other categories
  return (
    <>
      {renderPageTitle()}

      <S.Container>
        <S.LeftMenu>{renderCategoryFilter()}</S.LeftMenu>
        <S.RightContent>
          <Spacer size={32} />
          <CategoryDropdown categories={playlistCategories} />
          <PlaylistsSection category={playlistCategoryFilter} />
        </S.RightContent>
      </S.Container>

      {renderDiscordBanner()}
    </>
  );
};

export default Playlists;
