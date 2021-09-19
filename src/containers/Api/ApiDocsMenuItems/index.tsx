import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {NavigationItem} from 'types/navigation';

export const bankApiNavigationData = [
  {
    name: 'Accounts',
    url: '/api/bank-api/accounts',
  },
  {
    name: 'Bank Transactions',
    url: '/api/bank-api/bank-transactions',
  },
  {
    name: 'Banks',
    url: '/api/bank-api/banks',
  },
  {
    name: 'Blocks',
    url: '/api/bank-api/blocks',
  },
  {
    name: 'Clean',
    url: '/api/bank-api/clean',
  },
  {
    name: 'Config',
    url: '/api/bank-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/api/bank-api/confirmation-blocks',
  },
  {
    name: 'Crawl',
    url: '/api/bank-api/crawl',
  },
  {
    name: 'Invalid Blocks',
    url: '/api/bank-api/invalid-blocks',
  },
  {
    name: 'Connection Requests',
    url: '/api/bank-api/connection-requests',
  },
  {
    name: 'Confirmation Services',
    url: '/api/bank-api/validator-confirmation-services',
  },
  {
    name: 'Upgrade Notice',
    url: '/api/bank-api/upgrade-notice',
  },
  {
    name: 'Validators',
    url: '/api/bank-api/validators',
  },
];

export const confirmationValidatorApiNavigationData = [
  {
    name: 'Accounts',
    url: '/api/confirmation-validator-api/accounts',
  },
  {
    name: 'Confirmation Services',
    url: '/api/confirmation-validator-api/bank-confirmation-services',
  },
  {
    name: 'Banks',
    url: '/api/confirmation-validator-api/banks',
  },
  {
    name: 'Clean',
    url: '/api/confirmation-validator-api/clean',
  },
  {
    name: 'Config',
    url: '/api/confirmation-validator-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/api/confirmation-validator-api/confirmation-blocks',
  },
  {
    name: 'Connection Requests',
    url: '/api/confirmation-validator-api/connection-requests',
  },
  {
    name: 'Crawl',
    url: '/api/confirmation-validator-api/crawl',
  },
  {
    name: 'Primary Validator Updated',
    url: '/api/confirmation-validator-api/primary-validator-updated',
  },
  {
    name: 'Upgrade Request',
    url: '/api/confirmation-validator-api/upgrade-request',
  },
  {
    name: 'Validators',
    url: '/api/confirmation-validator-api/validators',
  },
];

export const primaryValidatorApiNavigationData = [
  {
    name: 'Accounts',
    url: '/api/primary-validator-api/accounts',
  },
  {
    name: 'Bank Blocks',
    url: '/api/primary-validator-api/bank-blocks',
  },
  {
    name: 'Banks',
    url: '/api/primary-validator-api/banks',
  },
  {
    name: 'Config',
    url: '/api/primary-validator-api/config',
  },
  {
    name: 'Confirmation Blocks',
    url: '/api/primary-validator-api/confirmation-blocks',
  },
  {
    name: 'Connection Requests',
    url: '/api/primary-validator-api/connection-requests',
  },
  {
    name: 'Validators',
    url: '/api/primary-validator-api/validators',
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
