import React from 'react';
import {AdditionalFeaturesId} from '../../../constants';

import './TokenDistributionExchange.scss';

const TokenDistributionExchange: React.FC = () => {
  return (
    <section id={AdditionalFeaturesId.TokenDistributionExchange}>
      <h3 className="AdditionalFeatures__section-sub-heading">Token Distribution: Exchange</h3>
      <p className="AdditionalFeatures__section-paragraph AdditionalFeatures__section-paragraph--mb-48">
        Users can buy and sell tokens on the exchange. When they list their tokens for sale on the exchange, the token
        owners must set the token price in TNBC and the quantity available for sale.
      </p>
    </section>
  );
};

export default TokenDistributionExchange;
