import React, {FC} from 'react';
import TokenDistributionAppsDiagram from 'assets/images/TokenDistributionApps.png';
import {AdditionalFeaturesId} from '../../../constants';

import './TokenDistributionApps.scss';

const TokenDistributionApps: React.FC = () => {
  return (
    <section id={AdditionalFeaturesId.TokenDistributionApps}>
      <h3 className="AdditionalFeatures__section-sub-heading">Token Distribution: Apps</h3>
      <p className="AdditionalFeatures__section-paragraph">
        Collection managers can distribute tokens through their apps. The details of this process are the following.
      </p>

      <img
        alt="Token Distribution: Apps"
        src={TokenDistributionAppsDiagram}
        loading="lazy"
        className="TokenDistributionAppsDiagram"
      />
      <section className="AdditionalFeatures__section">
        <p className="AdditionalFeatures__section-paragraph">
          Collection managers can choose more than one method to distribute the same token.They can distribute tokens
          through both their application logic and through the exchange.
        </p>
      </section>
    </section>
  );
};

export default TokenDistributionApps;
