import React, {ReactNode} from 'react';
import {IconType} from '@thenewboston/ui';

import {useBooleanState} from 'hooks';
import {SFC} from 'types/generic';
import * as S from './Styles';

type Props = {
  answer: ReactNode;
  question: ReactNode;
};

const FaqDropdownCard: SFC<Props> = ({answer, className, question}) => {
  const [expanded, toggleExpanded] = useBooleanState(false);

  return (
    <S.Container className={className} isExpanded={expanded}>
      <S.DropdownContainer>
        <S.LeftContainer>
          <S.Question onClick={toggleExpanded}>{question}</S.Question>
        </S.LeftContainer>
        <S.ToggleIcon
          icon={expanded ? IconType.chevronUp : IconType.chevronDown}
          isExpanded={expanded}
          onClick={toggleExpanded}
        />
      </S.DropdownContainer>
      {expanded && <S.ExpandedAnswer>{answer}</S.ExpandedAnswer>}
    </S.Container>
  );
};

export default FaqDropdownCard;
