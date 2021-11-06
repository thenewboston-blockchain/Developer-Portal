import {ROUTES} from 'constants/routes';

export const bankApiPath = `${ROUTES.tools.apis}/bank-api`;
export const confirmationValidatorApiPath = `${ROUTES.tools.apis}/confirmation-validator-api`;
export const primaryValidatorApiPath = `${ROUTES.tools.apis}/primary-validator-api`;

export const API_ITEMS = [
  {
    title: 'Bank API',
    url: `${ROUTES.tools.apis}/bank-api`,
  },
  {
    title: 'Confirmation Validator API',
    url: `${ROUTES.tools.apis}/confirmation-validator-api`,
  },
  {
    title: 'Primary Validator API',
    url: `${ROUTES.tools.apis}/primary-validator-api`,
  },
];

export const API_PATHNAME_TO_TITLE_MAPPING: Record<string, string> = {
  'bank-api': 'Bank API',
  'confirmation-validator-api': 'Confirmation Validator API',
  'primary-validator-api': 'Primary Validator API',
};

export const PATHNAME_TO_DROPDOWN_SELECTIONS: Record<string, {title: string; url: string}[]> = {
  'bank-api': [
    {
      title: 'Accounts',
      url: `${ROUTES.tools.apis}/bank-api/accounts`,
    },
    {
      title: 'Bank Transactions',
      url: `${ROUTES.tools.apis}/bank-api/bank-transactions`,
    },
    {
      title: 'Banks',
      url: `${ROUTES.tools.apis}/bank-api/banks`,
    },
    {
      title: 'Blocks',
      url: `${ROUTES.tools.apis}/bank-api/blocks`,
    },
    {
      title: 'Clean',
      url: `${ROUTES.tools.apis}/bank-api/clean`,
    },
    {
      title: 'Config',
      url: `${ROUTES.tools.apis}/bank-api/config`,
    },
    {
      title: 'Confirmation Blocks',
      url: `${ROUTES.tools.apis}/bank-api/confirmation-blocks`,
    },
    {
      title: 'Crawl',
      url: `${ROUTES.tools.apis}/bank-api/crawl`,
    },
    {
      title: 'Invalid Blocks',
      url: `${ROUTES.tools.apis}/bank-api/invalid-blocks`,
    },
    {
      title: 'Connection Requests',
      url: `${ROUTES.tools.apis}/bank-api/connection-requests`,
    },
    {
      title: 'Confirmation Services',
      url: `${ROUTES.tools.apis}/bank-api/validator-confirmation-services`,
    },
    {
      title: 'Upgrade Notice',
      url: `${ROUTES.tools.apis}/bank-api/upgrade-notice`,
    },
    {
      title: 'Validators',
      url: `${ROUTES.tools.apis}/bank-api/validators`,
    },
  ],
  'confirmation-validator-api': [
    {
      title: 'Accounts',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/accounts`,
    },
    {
      title: 'Confirmation Services',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/bank-confirmation-services`,
    },
    {
      title: 'Banks',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/banks`,
    },
    {
      title: 'Clean',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/clean`,
    },
    {
      title: 'Config',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/config`,
    },
    {
      title: 'Confirmation Blocks',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/confirmation-blocks`,
    },
    {
      title: 'Connection Requests',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/connection-requests`,
    },
    {
      title: 'Crawl',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/crawl`,
    },
    {
      title: 'Primary Validator Updated',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/primary-validator-updated`,
    },
    {
      title: 'Upgrade Request',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/upgrade-request`,
    },
    {
      title: 'Validators',
      url: `${ROUTES.tools.apis}/confirmation-validator-api/validators`,
    },
  ],
  'primary-validator-api': [
    {
      title: 'Accounts',
      url: `${ROUTES.tools.apis}/primary-validator-api/accounts`,
    },
    {
      title: 'Bank Blocks',
      url: `${ROUTES.tools.apis}/primary-validator-api/bank-blocks`,
    },
    {
      title: 'Banks',
      url: `${ROUTES.tools.apis}/primary-validator-api/banks`,
    },
    {
      title: 'Config',
      url: `${ROUTES.tools.apis}/primary-validator-api/config`,
    },
    {
      title: 'Confirmation Blocks',
      url: `${ROUTES.tools.apis}/primary-validator-api/confirmation-blocks`,
    },
    {
      title: 'Connection Requests',
      url: `${ROUTES.tools.apis}/primary-validator-api/connection-requests`,
    },
    {
      title: 'Validators',
      url: `${ROUTES.tools.apis}/primary-validator-api/validators`,
    },
  ],
};
