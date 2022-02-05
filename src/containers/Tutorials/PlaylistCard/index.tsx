import React, {FC, useMemo} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import {TimeFormat, TutorialsUrlParams, Video} from 'types/tutorials';
import {getFormattedTime} from 'utils/time';

import * as S from './styles';

interface PlaylistCardProps {
  pk: string;
  thumbnail: string;
  title: string;
  video_list: Video[];
}

const PlaylistCard: FC<PlaylistCardProps> = ({pk, title, thumbnail, video_list}) => {
  const history = useHistory();
  const {category: playlistCategoryParam} = useParams<TutorialsUrlParams>();

  const openPlaylist = (): void => {
    history.push(`/tutorials/${playlistCategoryParam}/${pk}`);
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      openPlaylist();
    }
  };

  const totalDuration = useMemo(() => video_list.reduce((acc, video) => acc + video.duration_seconds, 0), [video_list]);

  return (
    <S.Container onClick={openPlaylist} onKeyDown={handleKeydown} role="button" tabIndex={0}>
      <S.CardTop>
        <S.Thumbnail alt={title} loading="lazy" src={thumbnail} />
      </S.CardTop>
      <S.CardBottom>
        <S.Title>{title}</S.Title>
        <S.Details>
          {video_list.length} videos - {getFormattedTime(totalDuration, TimeFormat.english)}
        </S.Details>
      </S.CardBottom>
    </S.Container>
  );
};

export default PlaylistCard;
