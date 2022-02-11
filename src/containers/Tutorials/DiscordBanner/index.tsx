import React from 'react';

import {EmojiIcon, EmojiType, Spacer} from 'components';
import {URLS} from 'constants/routes';

import DiscordLogo from 'assets/svgs/DiscordLogo';

import * as S from './styles';

const DiscordBanner = () => {
  return (
    <S.Container>
      <EmojiIcon color="#4F52FF" emoji={EmojiType.Discord} emojiSize={72} size={136} marginBottom={56} />
      <S.Title>Join Discord</S.Title>
      <S.Text>Our Community Is There To Help</S.Text>
      <S.DiscordButton onClick={() => window.open(URLS.discord, '_blank', 'noreferrer noopener')}>
        <DiscordLogo />
        <Spacer xAxis size={8} />
        Discord
      </S.DiscordButton>
    </S.Container>
  );
};

export default DiscordBanner;
