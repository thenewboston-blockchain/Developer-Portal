import React, {FC} from 'react';

import {URLS} from 'constants/routes';

import * as S from './styles';

const HIGHLIGHT_DELAY = 1500;

const AppSubmissionSteps: FC = () => {
  const [highlightedSection, setHighlightedSection] = React.useState<0 | 1 | 2 | 3 | 4>(0);

  React.useLayoutEffect(() => {
    const headingInterval = setInterval(() => {
      setHighlightedSection((curr) => ((curr + 1) % 5) as 0 | 1 | 2 | 3 | 4);
    }, HIGHLIGHT_DELAY);

    return () => clearInterval(headingInterval);
  }, []);

  return (
    <S.Container>
      <S.StepCard
        highlighted={highlightedSection === 0}
        onClick={() => window.open(URLS.github.proposeProjects, '_blank', 'noreferrer noopener')}
      >
        <S.StepCardTitle>Submit App Proposal</S.StepCardTitle>
        <S.StepCardDescription>
          Complete your form on Github and the TNB team will review & approve your proposal
        </S.StepCardDescription>
      </S.StepCard>
      <S.NavigationArrow highlighted={highlightedSection === 1} />
      <S.StepCard
        highlighted={highlightedSection === 2}
        onClick={() => window.open(URLS.github.proposeMilestone, '_blank', 'noreferrer noopener')}
      >
        <S.StepCardTitle>Submit MVP</S.StepCardTitle>
        <S.StepCardDescription>
          On approval, create MVP and submit on Github for review and approval
        </S.StepCardDescription>
      </S.StepCard>
      <S.NavigationArrow highlighted={highlightedSection === 3} />
      <S.StepCard
        highlighted={highlightedSection === 4}
        onClick={() => window.open(URLS.github.proposeMilestonePayout, '_blank', 'noreferrer noopener')}
      >
        <S.StepCardTitle>Receive Coins</S.StepCardTitle>
        <S.StepCardDescription>
          You will receive coins as you complete milestone throughout the development process
        </S.StepCardDescription>
      </S.StepCard>
    </S.Container>
  );
};

export default AppSubmissionSteps;
