import React from 'react';
import {NavLink} from 'react-router-dom';

import {MenuGroup} from 'components';
import {SFC} from 'types/generic';

const DocsMenuItems: SFC = () => {
  return (
    <>
      <MenuGroup title="Node Deployment" urlBase="node-deployment">
        <NavLink to="/node-deployment/bank">Bank</NavLink>
        <NavLink to="/node-deployment/validator">Validator</NavLink>
      </MenuGroup>
    </>
  );
};

export default DocsMenuItems;
