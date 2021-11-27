import React, {FC} from 'react';

import AppSubmissionHero from './AppSubmissionHero';
import AppSubmissionSteps from './AppSubmissionSteps';
import AppSubmissionMessage from './AppSubmissionMessage';
import AppSubmissionFaq from './AppSubmissionFaq';

const AppSubmissionGuide: FC = () => {
  return (
    <>
      <AppSubmissionHero />
      <AppSubmissionSteps />
      <AppSubmissionMessage />
      <AppSubmissionFaq />
    </>
  );
};

export default AppSubmissionGuide;
