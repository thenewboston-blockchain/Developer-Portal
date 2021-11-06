import React, {FC, useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {DashboardLayout, DocsMenuItems, PageTitle} from 'components';
import {ROUTES} from 'constants/routes';
import {PageData, PageDataObject} from 'types/page-data';

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

  return (
    <DashboardLayout menuItems={<DocsMenuItems />} pageName={name} sectionName="Node Deployment">
      <PageTitle ogDescription={`${name} Node Deployment`} title={`${name} Node Deployment`} />
      {content}
    </DashboardLayout>
  );
};

export default NodeDeployment;
