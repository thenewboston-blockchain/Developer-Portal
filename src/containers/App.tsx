import React, {FC, lazy} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';
import withSuspense from 'hoc/withSuspense';

import ArchitectureDeepDive from './LivingWhitepaper/containers/ArchitectureDeepDive';
import BankApi from './Api/BankApi';
import ConfirmationValidatorApi from './Api/ConfirmationValidatorApi';
import Guidelines from './Guidelines';
import LivingWhitepaper from './LivingWhitepaper';
import PrimaryValidatorApi from './Api/PrimaryValidatorApi';
import PrincipalEntities from './LivingWhitepaper/containers/PrincipalEntities';
import PrincipalEventsAndProcesses from './LivingWhitepaper/containers/PrincipalEventsAndProcesses';
import PrivacyPolicy from './PrivacyPolicy';
import Projects from './Projects';
import ProjectRulesAndGuidelines from './Projects/containers/ProjectRulesAndGuidelines';
import ApprovedProjects from './Projects/containers/ApprovedProjects';
import TermsOfUse from './TermsOfUse';

/**
 * Lazy load pages that may contribute a lot to the bundle size
 */
const DeveloperPortal = lazy(() => import('./DeveloperPortal'));

interface GoogleAnalyticsWindow extends Window {
  ga: any;
  gtag: any;
}

declare const window: GoogleAnalyticsWindow;

const App: FC = () => {
  const renderGoogleAnalytics = () => {
    if (process.env.NODE_ENV === 'development') return null;
    return (
      <Route
        path="/"
        render={({location}) => {
          if (typeof window.ga === 'function') {
            window.gtag('config', 'UA-56989641-1', {
              page_location: window.location.href,
              page_path: location.pathname,
              page_title: document.title,
            });
          }
          return null;
        }}
      />
    );
  };

  return (
    <Router>
      {renderGoogleAnalytics()}
      <Layout>
        <Switch>
          <Route exact path="/" component={withSuspense(DeveloperPortal)} />
          <Route exact path="/whitepaper" component={LivingWhitepaper} />
          <Route exact path="/whitepaper/principal-entities/:chapter?" component={PrincipalEntities} />
          <Route exact path="/whitepaper/principal-events/:chapter?" component={PrincipalEventsAndProcesses} />
          <Route exact path="/whitepaper/architecture/:chapter?" component={ArchitectureDeepDive} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/rules" component={ProjectRulesAndGuidelines} />
          <Route exact path="/projects/approved-projects/:projectId?" component={ApprovedProjects} />
          <Route path="/api/bank-api/:chapter?" component={BankApi} />
          <Route path="/api/confirmation-validator-api/:chapter?" component={ConfirmationValidatorApi} />
          <Route path="/api/primary-validator-api/:chapter?" component={PrimaryValidatorApi} />
          <Route path="/guidelines" component={Guidelines} />
          <Route path="/terms-of-use" component={TermsOfUse} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
