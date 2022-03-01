import React, {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {IconType} from '@thenewboston/ui';

import {getPlaylist} from 'apis/tutorials';
import {Button, EmojiIcon, EmojiType, EmptyPage, Loader, PageTitle, Spacer, VideoPlayer} from 'components';
import {ROUTES} from 'constants/routes';
import {Playlist, TimeFormat, Video, TutorialsUrlParams} from 'types/tutorials';
import {getFormattedTime} from 'utils/time';

import DiscordBanner from '../DiscordBanner';

import * as S from './styles';

const WatchPlaylist: FC = () => {
  const history = useHistory();
  const {playlistId} = useParams<TutorialsUrlParams>();

  const [loading, setLoading] = useState<boolean>(true);
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        const playlistResponse = await getPlaylist(playlistId);
        setPlaylist(playlistResponse);
        if (playlistResponse.video_list.length) {
          setCurrentVideo(playlistResponse.video_list[0]);
        }
      } catch (error: any) {
        if (error.response.status === 404) {
          return setErrorMessage('Playlist not found!');
        }
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [playlistId]);

  const handleVideoEnd = useCallback((): void => {
    if (playlist?.video_list.length) {
      const index = playlist.video_list.findIndex((video) => video.pk === currentVideo?.pk);
      if (index !== -1 && index !== playlist.video_list.length - 1) {
        setCurrentVideo(playlist.video_list[index + 1]);
      }
    }
  }, [currentVideo, playlist]);

  const renderVideoList = (): ReactNode => (
    <S.Playlist>
      <S.PlaylistHeader>
        <S.PlaylistHeading>{playlist?.title}</S.PlaylistHeading>
        <S.PlaylistCount>{playlist?.video_list.length} videos</S.PlaylistCount>
      </S.PlaylistHeader>
      <S.VideoList>
        {playlist?.video_list.map((video, index) => (
          <S.VideoListItem
            key={video.video_id}
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentVideo(video);
            }}
            onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
              if (event.key === 'Enter') {
                setCurrentVideo(video);
              }
            }}
            role="button"
            tabIndex={0}
            title={video.title}
          >
            <S.VideoListItemIconContainer isActive={video.pk === currentVideo?.pk}>
              {video.pk === currentVideo?.pk ? <S.VideoListItemIcon size={16} icon={IconType.play} /> : index + 1}
            </S.VideoListItemIconContainer>
            <S.VideoListItemTitle isActive={video.pk === currentVideo?.pk}>{video.title}</S.VideoListItemTitle>
            <S.VideoListItemDuration>
              {getFormattedTime(video.duration_seconds, TimeFormat.digital)}
            </S.VideoListItemDuration>
          </S.VideoListItem>
        ))}
      </S.VideoList>
    </S.Playlist>
  );

  if (loading)
    return (
      <div className="WatchPlaylist__loader">
        <Loader />
      </div>
    );

  if (errorMessage) return <div className="WatchPlaylist__error">{errorMessage}</div>;

  if (!playlist || !currentVideo) return <EmptyPage />;

  return (
    <>
      <PageTitle
        ogDescription={currentVideo.description || undefined}
        title={`${currentVideo.title} | ${playlist.title}`}
      />
      <S.Container>
        <S.BackLink onClick={() => (history.length === 2 ? history.push(ROUTES.tutorials) : history.goBack())}>
          {'<--'} Tutorials
        </S.BackLink>

        <S.Grid>
          <VideoPlayer
            className="WatchPlaylist__video"
            onEnded={handleVideoEnd}
            source={playlist.playlist_type}
            videoId={currentVideo.video_id}
          />

          {renderVideoList()}

          <S.Details>
            <S.Pill>Lesson {(playlist.video_list.findIndex((v) => v.pk === currentVideo.pk) ?? 0) + 1}</S.Pill>
            <S.VideoHeading>{currentVideo.title}</S.VideoHeading>
            {!!currentVideo.description && <S.VideoDescription>{currentVideo.description}</S.VideoDescription>}
          </S.Details>

          <DiscordBanner variant="small" />
        </S.Grid>

        <Spacer size={120} />

        <S.Banner>
          <EmojiIcon color="#F9C200" emoji={EmojiType.Wrench} emojiSize={40} size={72} marginBottom={32} />
          <S.BannerHeading>Ready to Develop?</S.BannerHeading>
          <Button variant="contained" color="quaternary" onClick={() => history.push(ROUTES.projects.home)}>
            Propose app
          </Button>
        </S.Banner>

        <Spacer size={120} />
      </S.Container>
    </>
  );
};

export default WatchPlaylist;
