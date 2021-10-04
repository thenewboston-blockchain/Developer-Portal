import React, {FC, lazy} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import {Layout} from 'components';
import {ROUTES} from 'constants/routes';
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
import DeveloperTools from './DeveloperTools';
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
          <Route exact path={ROUTES.whitepaper.home} component={LivingWhitepaper} />
          <Route exact path={`${ROUTES.whitepaper.principalEntities}/:chapter?`} component={PrincipalEntities} />
          <Route
            exact
            path={`${ROUTES.whitepaper.principalEvents}/:chapter?`}
            component={PrincipalEventsAndProcesses}
          />
          <Route exact path={`${ROUTES.whitepaper.architecture}/:chapter?`} component={ArchitectureDeepDive} />
          <Route exact path={ROUTES.projects.home} component={Projects} />
          <Route exact path={ROUTES.projects.rules} component={ProjectRulesAndGuidelines} />
          <Route exact path={`${ROUTES.projects.approvedProjects}/:projectId?`} component={ApprovedProjects} />
          <Route path={`${ROUTES.tools.apis}/bank-api/:chapter?`} component={BankApi} />
          <Route
            path={`${ROUTES.tools.apis}/confirmation-validator-api/:chapter?`}
            component={ConfirmationValidatorApi}
          />
          <Route path={`${ROUTES.tools.apis}/primary-validator-api/:chapter?`} component={PrimaryValidatorApi} />
          <Redirect path={ROUTES.tools.apis} to={`${ROUTES.tools.apis}/bank-api`} />
          <Route exact path={ROUTES.tools.developerTools} component={DeveloperTools} />
          <Route path={ROUTES.legal.guidelines} component={Guidelines} />
          <Route path={ROUTES.legal.termsOfUse} component={TermsOfUse} />
          <Route path={ROUTES.legal.privacyPolicy} component={PrivacyPolicy} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
