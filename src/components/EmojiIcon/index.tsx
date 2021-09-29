import React from 'react';

import {SFC} from 'types/generic';
import {BulbEmoji, GearEmoji, PaperEmoji, WrenchEmoji} from './components';
import * as S from './Styles';

export enum EmojiType {
  Paper = '📄',
  Bulb = '💡',
  Gear = '⚙️',
  Wrench = '🔧',
}

type Props = {
  color: string;
  emoji: EmojiType;
  emojiSize?: number;
  size?: number;
  marginBottom?: number;
};

const getEmojiIcon = (emojiType: EmojiType, emojiSize: number) => {
  const style = {height: `${emojiSize}px`, width: `${emojiSize}px`};
  switch (emojiType) {
    case EmojiType.Bulb:
      return <BulbEmoji style={style} />;
    case EmojiType.Paper:
      return <PaperEmoji style={style} />;
    case EmojiType.Gear:
      return <GearEmoji style={style} />;
    case EmojiType.Wrench:
      return <WrenchEmoji style={style} />;
    default:
      return <BulbEmoji style={style} />;
  }
};

const EmojiIcon: SFC<Props> = ({className, color, emoji, emojiSize = 40, marginBottom = 0, size = 72}) => {
  return (
    <S.Container className={className} color={color} emojiSize={emojiSize} marginBottom={marginBottom} size={size}>
      {getEmojiIcon(emoji, emojiSize)}
    </S.Container>
  );
};

export default EmojiIcon;
