import React, {FC} from 'react';

import {Divider, Navigation} from 'components';
import DeveloperPortalLayout from '../../components/DeveloperPortalLayout';

import AccountLock from './AccountLock';
import AddingValidators from './AddingValidators';
import BlockStructure from './BlockStructure';
import ConsensusCV from './ConsensusCV';
import FAQ from './FAQ';
import NetworkInitialization from './NetworkInitialization';
import NodeIdentifier from './NodeIdentifier';

import './ArchitectureDeepDive.scss';

const ArchitectureDeepDive: FC = () => {
  return (
    <DeveloperPortalLayout pageName="Living Whitepaper | Architecture Deep Dive">
      <div className="ArchitectureDeepDive">
        <div className="ArchitectureDeepDive__page-title">Architecture Deep Dive</div>
        <BlockStructure />
        <AccountLock />
        <NodeIdentifier />
        <AddingValidators />
        <ConsensusCV />
        <NetworkInitialization />
        <FAQ />

        <Divider className="ArchitectureDeepDive__divider" />

        <div className="ArchitectureDeepDive__navigation">
          <Navigation path="/whitepaper/additional-features" text="Additional Features" type="right" />
        </div>
      </div>
    </DeveloperPortalLayout>
  );
};

export default ArchitectureDeepDive;
