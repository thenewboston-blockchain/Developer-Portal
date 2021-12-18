import React, {FC} from 'react';

import {Divider, Navigation, Note, NoteType} from 'components';

import {AdditionalFeaturesId} from '../../constants';
import DeveloperPortalLayout from '../../components/DeveloperPortalLayout';
import Collections from './Collections';
import TokenMinting from './TokenMinting';
import CollectionManagersVsTokenOwners from './CollectionManagersVsTokenOwners';

import {TokenDistributionExchange} from './TokenDistributionExchange';

import './AdditionalFeatures.scss';

const AdditionalFeatures: FC = () => {
  return (
    <DeveloperPortalLayout pageName="Living Whitepaper | Principal Entities">
      <div className="PrincipalEntities">
        <h6 className="AdditionalFeatures__heading">Additional Features</h6>

        <section className="AdditionalFeatures__section">
          <h2 className="AdditionalFeatures__section-heading">Tokens</h2>
          <p className="AdditionalFeatures__section-paragraph">
            The token system allows users to represent a variety of digital assets as tokens on thenewboston blockchain.
          </p>
        </section>

        <Collections />
        <TokenMinting />

        {/* Token Grid */}
        {/* <TokenDistributionApps /> */}
        <TokenDistributionExchange />
        <CollectionManagersVsTokenOwners />

        <div className="AdditionalFeatures__bottom-bar">
          <Navigation path="/whitepaper/principal-entities" text="Principal Entities on the Network" type="right" />
        </div>
      </div>
    </DeveloperPortalLayout>
  );
};

export default AdditionalFeatures;
