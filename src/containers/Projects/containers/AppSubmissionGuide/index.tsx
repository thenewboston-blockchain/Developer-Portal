import React, {FC} from 'react';

import {Container, PageTitle} from 'components';
import AppSubmissionHero from './AppSubmissionHero';
import AppSubmissionSteps from './AppSubmissionSteps';
import AppSubmissionMessage from './AppSubmissionMessage';
import AppSubmissionFaq from './AppSubmissionFaq';
import Breadcrumb from '../../components/Breadcrumb';

const AppSubmissionGuide: FC = () => {
  return (
    <>
      <PageTitle title="App Submission Guide" />
      <Container>
        <Breadcrumb breadcrumbHeight={56} />
      </Container>
      <AppSubmissionHero />
      <AppSubmissionSteps />
      <AppSubmissionMessage />
      <AppSubmissionFaq />
    </>
  );
};

export default AppSubmissionGuide;
