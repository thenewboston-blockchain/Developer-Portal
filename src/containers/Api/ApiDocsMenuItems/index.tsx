import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {ROUTES} from 'constants/routes';
import {NavigationItem} from 'types/navigation';

export const bankApiNavigationData = [
  {
    name: 'Accounts',
    url: `${ROUTES.tools.apis}/bank-api/accounts`,
  },
  {
    name: 'Bank Transactions',
    url: `${ROUTES.tools.apis}/bank-api/bank-transactions`,
  },
  {
    name: 'Banks',
    url: `${ROUTES.tools.apis}/bank-api/banks`,
  },
  {
    name: 'Blocks',
    url: `${ROUTES.tools.apis}/bank-api/blocks`,
  },
  {
    name: 'Clean',
    url: `${ROUTES.tools.apis}/bank-api/clean`,
  },
  {
    name: 'Config',
    url: `${ROUTES.tools.apis}/bank-api/config`,
  },
  {
    name: 'Confirmation Blocks',
    url: `${ROUTES.tools.apis}/bank-api/confirmation-blocks`,
  },
  {
    name: 'Crawl',
    url: `${ROUTES.tools.apis}/bank-api/crawl`,
  },
  {
    name: 'Invalid Blocks',
    url: `${ROUTES.tools.apis}/bank-api/invalid-blocks`,
  },
  {
    name: 'Connection Requests',
    url: `${ROUTES.tools.apis}/bank-api/connection-requests`,
  },
  {
    name: 'Confirmation Services',
    url: `${ROUTES.tools.apis}/bank-api/validator-confirmation-services`,
  },
  {
    name: 'Upgrade Notice',
    url: `${ROUTES.tools.apis}/bank-api/upgrade-notice`,
  },
  {
    name: 'Validators',
    url: `${ROUTES.tools.apis}/bank-api/validators`,
  },
];

export const confirmationValidatorApiNavigationData = [
  {
    name: 'Accounts',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/accounts`,
  },
  {
    name: 'Confirmation Services',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/bank-confirmation-services`,
  },
  {
    name: 'Banks',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/banks`,
  },
  {
    name: 'Clean',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/clean`,
  },
  {
    name: 'Config',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/config`,
  },
  {
    name: 'Confirmation Blocks',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/confirmation-blocks`,
  },
  {
    name: 'Connection Requests',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/connection-requests`,
  },
  {
    name: 'Crawl',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/crawl`,
  },
  {
    name: 'Primary Validator Updated',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/primary-validator-updated`,
  },
  {
    name: 'Upgrade Request',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/upgrade-request`,
  },
  {
    name: 'Validators',
    url: `${ROUTES.tools.apis}/confirmation-validator-api/validators`,
  },
];

export const primaryValidatorApiNavigationData = [
  {
    name: 'Accounts',
    url: `${ROUTES.tools.apis}/primary-validator-api/accounts`,
  },
  {
    name: 'Bank Blocks',
    url: `${ROUTES.tools.apis}/primary-validator-api/bank-blocks`,
  },
  {
    name: 'Banks',
    url: `${ROUTES.tools.apis}/primary-validator-api/banks`,
  },
  {
    name: 'Config',
    url: `${ROUTES.tools.apis}/primary-validator-api/config`,
  },
  {
    name: 'Confirmation Blocks',
    url: `${ROUTES.tools.apis}/primary-validator-api/confirmation-blocks`,
  },
  {
    name: 'Connection Requests',
    url: `${ROUTES.tools.apis}/primary-validator-api/connection-requests`,
  },
  {
    name: 'Validators',
    url: `${ROUTES.tools.apis}/primary-validator-api/validators`,
  },
];

const DocsMenuItems: FC = () => {
  const renderNavLinks = (navigationData: NavigationItem[]) => {
    return navigationData.map(({name, url}) => (
      <NavLink key={url} to={url}>
        {name}
      </NavLink>
    ));
  };

  return (
    <>
      <MenuGroup title="Bank API" urlBase="api/bank-api">
        {renderNavLinks(bankApiNavigationData)}
      </MenuGroup>

      <MenuGroup title="Primary Validator API" urlBase="api/primary-validator-api">
        {renderNavLinks(primaryValidatorApiNavigationData)}
      </MenuGroup>

      <MenuGroup title="Confirmation Validator API" urlBase="api/confirmation-validator-api">
        {renderNavLinks(confirmationValidatorApiNavigationData)}
      </MenuGroup>
    </>
  );
};

export default DocsMenuItems;
