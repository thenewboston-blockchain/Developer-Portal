import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {ROUTES} from 'constants/routes';
import {PageData, PageDataObject} from 'types/page-data';
import Layout from './components/Layout';

import DeploymentGuideBank from './DeploymentGuideBank';
import DeploymentGuideValidator from './DeploymentGuideValidator';

const defaultPageData: PageData = {
  content: <Redirect to={`${ROUTES.tools.nodeDeployment}/bank`} />,
  name: '',
};

const pageData: PageDataObject = {
  bank: {
    content: <DeploymentGuideBank />,
    name: 'Bank',
  },
  validator: {
    content: <DeploymentGuideValidator />,
    name: 'Validator',
  },
};

const getPageData = (chapter: string): PageData => {
  return pageData[chapter] || defaultPageData;
};

const NodeDeployment: FC = () => {
  const {chapter} = useParams<{chapter: string}>();
  const {content, name} = useMemo(() => getPageData(chapter), [chapter]);

  return <Layout pageName={`${name} Node Deployment`}>{content}</Layout>;
};

export default NodeDeployment;
