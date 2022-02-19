import React, {FC} from 'react';

import {Divider, Navigation} from 'components';

import DeveloperPortalLayout from '../../components/DeveloperPortalLayout';
import Collections from './Collections';
import TokenMinting from './TokenMinting';
import CollectionManagersVsTokenOwners from './CollectionManagersVsTokenOwners';
import TokenDistributionApps from './TokenDistributionApps';
import TokenDistributionExchange from './TokenDistributionExchange';

import './AdditionalFeatures.scss';

const AdditionalFeatures: FC = () => {
  return (
    <DeveloperPortalLayout pageName="Living Whitepaper | Principal Entities">
      <div className="AdditionalFeatures">
        <h6 className="AdditionalFeatures__heading">Additional Features</h6>

        <section className="AdditionalFeatures__section">
          <h2 className="AdditionalFeatures__section-heading">Tokens</h2>
          <p className="AdditionalFeatures__section-paragraph AdditionalFeatures__section-paragraph--mb-48">
            The token system allows users to represent a variety of digital assets as tokens on thenewboston blockchain.
          </p>
        </section>

        <Collections />

        <TokenMinting />

        <TokenDistributionExchange />

        <TokenDistributionApps />

        <CollectionManagersVsTokenOwners />

        <Divider className="AdditionalFeatures__divider" />

        <div className="AdditionalFeatures__bottom-bar">
          <Navigation path="/whitepaper/architecture" text="Architecture - Deep Dive" type="left" />
        </div>
      </div>
    </DeveloperPortalLayout>
  );
};

export default AdditionalFeatures;
