import React from 'react';

import {DataTable, Note, NoteType} from 'components';
import {AdditionalFeaturesId} from '../../../constants';

import './Collections.scss';

const Collections: React.FC = () => {
  return (
    <section id={AdditionalFeaturesId.Collections}>
      <h3 className="AdditionalFeatures__section-sub-heading">Collections</h3>
      <p className="AdditionalFeatures__section-paragraph">
        To create/mint tokens, users must first create a collection. A collection is simply a container/folder for
        tokens. Collections have the following attributes:
      </p>
      <section className="AdditionalFeatures__section">
        <DataTable
          className="Collections"
          columns={['Attribute', 'Required?', 'Definition']}
          data={[
            ['Collection ticker', 'Yes', 'Unique abbreviation used as a global identifier across the network'],
            ['Logo', 'No / Optional', 'URL of the image to be used as the visual for the collection'],
            ['Name', 'Yes', 'Human-readable name of the collection'],
            ['Description', 'Yes', 'Outline//information about the collection'],
            ['URL', 'No / Optional', 'URL for users to visit for additional information'],
          ]}
        />
        <p className="AdditionalFeatures__section-paragraph AdditionalFeatures__section-paragraph--mt-32 AdditionalFeatures__section-text--bold">
          After creating the collection, users can update all attributes aside from the collection ticker.
        </p>
        <p className="AdditionalFeatures__section-paragraph AdditionalFeatures__section-paragraph--mb-32">
          The creator of each collection is referred to as the collection manager. Collection managers are the initial
          owners of all tokens they create and they handle certain management tasks for both the collection itself and
          related tokens. They must also pay a creation fee during the collection creation process, which will be set
          on-chain by the government.
        </p>

        <Note
          className="AdditionalFeatures__section-note"
          text="For this development cycle of the Tokens system, the main goal is core functionality development. Currently, known limitations include cases of transferring ownership, allowing for multiple managers, and so on."
          type={NoteType.Information}
        />
      </section>
    </section>
  );
};

export default Collections;
