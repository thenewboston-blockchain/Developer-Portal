import React from 'react';

import {SFC} from 'types/generic';
import * as S from './Styles';

export enum EmojiType {
  Paper = '📄',
  Bulb = '💡',
  Gear = '⚙️',
  Web = '🕸',
}

type Props = {
  color: string;
  emoji: EmojiType;
  emojiSize?: number;
  size?: number;
  marginBottom?: number;
};

const EmojiIcon: SFC<Props> = ({className, color, emoji, emojiSize = 40, marginBottom = 0, size = 72}) => {
  return (
    <S.Container className={className} color={color} emojiSize={emojiSize} marginBottom={marginBottom} size={size}>
      {emoji}
    </S.Container>
  );
};

export default EmojiIcon;
