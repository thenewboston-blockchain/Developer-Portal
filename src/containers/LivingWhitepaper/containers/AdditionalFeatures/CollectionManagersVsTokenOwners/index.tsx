import React from 'react';

import {Note, NoteType} from 'components';
import {AdditionalFeaturesId} from '../../../constants';

import './CollectionManagersVsTokenOwners.scss';

const CollectionManagersVsTokenOwners: React.FC = () => {
  return (
    <section id={AdditionalFeaturesId.CollectionManagersVsTokenOwners}>
      <h3 className="AdditionalFeatures__section-sub-heading">Collection Managers vs. Token Owners</h3>
      <p className="AdditionalFeatures__section-paragraph">
        In terms of tokens and collections, the differences between the user types on thenewboston blockchain are the
        following:
      </p>
      <section className="AdditionalFeatures__section">
        <div className="AdditionalFeatures__sub-section">
          <h4>Collection Managers</h4>
          <ul className="AdditionalFeatures__section-list">
            <li className="AdditionalFeatures__section-list-item">Can update information related to the collection</li>
            <li className="AdditionalFeatures__section-list-item">Can update information related to the tokens</li>
          </ul>
        </div>

        <div className="AdditionalFeatures__sub-section">
          <h4>Token Owners</h4>
          <ul className="AdditionalFeatures__section-list">
            <li className="AdditionalFeatures__section-list-item">
              Can transfer ownership of tokens manually or by selling them on the exchange
            </li>
          </ul>
        </div>
        <Note
          className="AdditionalFeatures__section-note"
          text="Although many of the token examples used in this document primarily focus on gaming, developers can use tokens as software credits in a variety of usage based software and web apps."
          type={NoteType.Information}
        />
      </section>
    </section>
  );
};

export default CollectionManagersVsTokenOwners;
