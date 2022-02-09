import React from 'react';

import {getPlaylists, getTrendingPlaylists} from 'apis/tutorials';
import {trendingTutorialsFilter} from 'constants/tutorials';
import {ErrorMessage, Loader} from 'components';
import {Playlist, PlaylistType} from 'types/tutorials';

import PlaylistCard from '../PlaylistCard';

import * as S from './styles';

type Props = {
  type?: PlaylistType;
  category: string;
};

const PlaylistsSection = ({type, category}: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [playlists, setPlaylists] = React.useState<Playlist[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const isTrendingTab = category === trendingTutorialsFilter.title;

        const playlistsResponse = isTrendingTab ? await getTrendingPlaylists(type!) : await getPlaylists(category);
        setPlaylists(playlistsResponse);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category, type]);

  const renderContent = () => {
    if (isLoading) return <Loader />;

    if (error) return <ErrorMessage />;

    return (
      <S.Grid>
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.pk}
            pk={playlist.pk}
            thumbnail={playlist.thumbnail}
            title={playlist.title}
            video_list={playlist.video_list}
          />
        ))}
      </S.Grid>
    );
  };

  return (
    <S.Container>
      {!!type && <S.Title>{type}</S.Title>}
      {renderContent()}
    </S.Container>
  );
};

export default PlaylistsSection;
