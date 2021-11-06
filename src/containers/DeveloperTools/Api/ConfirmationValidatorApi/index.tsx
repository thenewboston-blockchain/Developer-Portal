import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {PageData, PageDataObject} from 'types/page-data';
import Layout from '../components/Layout';

import ConfirmationValidatorApiAccounts from './ConfirmationValidatorApiAccounts';
import ConfirmationValidatorApiBankConfirmationServices from './ConfirmationValidatorApiBankConfirmationServices';
import ConfirmationValidatorApiBanks from './ConfirmationValidatorApiBanks';
import ConfirmationValidatorApiConfig from './ConfirmationValidatorApiConfig';
import ConfirmationValidatorApiConfirmationBlocks from './ConfirmationValidatorApiConfirmationBlocks';
import ConfirmationValidatorApiPrimaryValidatorUpdated from './ConfirmationValidatorApiPrimaryValidatorUpdated';
import ConfirmationValidatorApiUpgradeRequest from './ConfirmationValidatorApiUpgradeRequest';
import ConfirmationValidatorApiValidators from './ConfirmationValidatorApiValidators';

import NodeApiClean from '../NodeApi/NodeApiClean';
import NodeApiConnectionRequests from '../NodeApi/NodeApiConnectionRequests';
import NodeApiCrawl from '../NodeApi/NodeApiCrawl';

const defaultPageData: PageData = {
  content: <Redirect to="/api/confirmation-validator-api/accounts" />,
  name: '',
};

const pageData: PageDataObject = {
  accounts: {
    content: <ConfirmationValidatorApiAccounts />,
    name: 'Accounts',
  },
  'bank-confirmation-services': {
    content: <ConfirmationValidatorApiBankConfirmationServices />,
    name: 'Bank Confirmation Services',
  },
  banks: {
    content: <ConfirmationValidatorApiBanks />,
    name: 'Banks',
  },
  clean: {
    content: <NodeApiClean />,
    name: 'Clean',
  },
  config: {
    content: <ConfirmationValidatorApiConfig />,
    name: 'Config',
  },
  'confirmation-blocks': {
    content: <ConfirmationValidatorApiConfirmationBlocks />,
    name: 'Confirmation Blocks',
  },
  'connection-requests': {
    content: <NodeApiConnectionRequests />,
    name: 'Connection Requests',
  },
  crawl: {
    content: <NodeApiCrawl />,
    name: 'Crawl',
  },
  'primary-validator-updated': {
    content: <ConfirmationValidatorApiPrimaryValidatorUpdated />,
    name: 'Primary Validator Updated',
  },
  'upgrade-request': {
    content: <ConfirmationValidatorApiUpgradeRequest />,
    name: 'Upgrade Request',
  },
  validators: {
    content: <ConfirmationValidatorApiValidators />,
    name: 'Validators',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const ConfirmationValidatorApi: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return <Layout pageName={`${name} | Confirmation Validator API`}>{content}</Layout>;
};

export default ConfirmationValidatorApi;
