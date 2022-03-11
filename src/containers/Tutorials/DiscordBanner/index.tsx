import React from 'react';

import {EmojiIcon, EmojiType, Spacer} from 'components';
import {URLS} from 'constants/routes';

import DiscordLogo from 'assets/svgs/DiscordLogo';

import * as S from './styles';

type Props = {
  variant?: 'small' | 'large';
};

const DiscordBanner = ({variant = 'large'}: Props) => {
  return (
    <S.Container variant={variant}>
      <EmojiIcon
        color="#4F52FF"
        emoji={EmojiType.Discord}
        emojiSize={variant === 'small' ? 24 : 72}
        size={variant === 'small' ? 48 : 136}
        marginBottom={variant === 'small' ? 16 : 56}
      />
      <S.Title variant={variant}>Join Discord</S.Title>
      <S.Text variant={variant}>Our Community Is There To Help</S.Text>
      <S.DiscordButton onClick={() => window.open(URLS.discord, '_blank', 'noreferrer noopener')}>
        <DiscordLogo />
        <Spacer xAxis size={8} />
        Discord
      </S.DiscordButton>
    </S.Container>
  );
};

export default DiscordBanner;
