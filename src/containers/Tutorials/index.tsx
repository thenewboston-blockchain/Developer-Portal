import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {getPlaylistCategories} from 'apis/tutorials';
import {BreadcrumbMenu, Container, FlatNavLinks, Loader, PageTitle} from 'components';
import {trendingTutorialsFilter} from 'constants/tutorials';
import {ROUTES} from 'constants/routes';
import {NavOption} from 'types/option';
import {PlaylistCategory, TutorialsUrlParams} from 'types/tutorials';

import Playlists from './Playlists';
import WatchPlaylist from './WatchPlaylist';
import './Tutorials.scss';

const Tutorials: FC = () => {
  const history = useHistory();
  const {category: categoryParam, playlistId: playlistIdParam} = useParams<TutorialsUrlParams>();

  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [playlistCategories, setPlaylistCategories] = useState<NavOption[]>([]);
  const [playlistCategoryFilter, setPlaylistCategoryFilter] = useState<string>(trendingTutorialsFilter.title);

  useEffect(() => {
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

  useEffect(() => {
    if (!loading) {
      if (playlistCategories.some((playlistCategory: NavOption) => playlistCategory.pathname === categoryParam)) {
        setPlaylistCategoryFilter(categoryParam);
      } else {
        history.replace(`${ROUTES.tutorials}/${trendingTutorialsFilter.pathname}`);
      }
    }
  }, [playlistCategories, loading, categoryParam, history]);

  const handleNavOptionClick = useCallback(
    (option: string) => (): void => {
      history.push(`${ROUTES.tutorials}/${option}`);
    },
    [history],
  );

  const renderCategoryFilter = (): ReactNode => {
    return (
      <FlatNavLinks
        handleOptionClick={handleNavOptionClick}
        options={playlistCategories}
        selectedOption={playlistCategoryFilter ?? trendingTutorialsFilter.title}
      />
    );
  };

  if (loading)
    return (
      <div className="Tutorials__loader">
        <Loader />
      </div>
    );
  if (errorMessage) return <div className="Tutorials__error">{errorMessage}</div>;
  return (
    <>
      <PageTitle title="Tutorials" />
      <Container className="Tutorials">
        <BreadcrumbMenu
          className="Tutorials__BreadcrumbMenu"
          menuItems={renderCategoryFilter()}
          pageName={playlistCategoryFilter ?? trendingTutorialsFilter.title}
          sectionName="Tutorials"
        />
        <aside className="Tutorials__left-menu">{renderCategoryFilter()}</aside>
        <div className="Tutorials__right-content">
          {playlistIdParam ? (
            <WatchPlaylist playlistId={playlistIdParam} />
          ) : (
            <Playlists category={playlistCategoryFilter} />
          )}
        </div>
      </Container>
    </>
  );
};

export default Tutorials;
