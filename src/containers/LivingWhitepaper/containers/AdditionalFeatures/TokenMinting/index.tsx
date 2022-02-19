import React, {ReactNode} from 'react';

import {DataTable} from 'components';

import DreamArt from 'containers/LivingWhitepaper/assets/dream-art.png';
import MagicAxe from 'containers/LivingWhitepaper/assets/magic-axe.png';
import Gold from 'containers/LivingWhitepaper/assets/gold.png';
import {AdditionalFeaturesId} from '../../../constants';

import './TokenMinting.scss';

const TokenMinting: React.FC = () => {
  const columns = [
    'Image',
    <img src={DreamArt} alt="Dream Art" />,
    <img src={MagicAxe} alt="Magic Axe" />,
    <img src={Gold} alt="Gold" />,
  ];

  const art = {
    Artist: 'Joe',
    Year: 2021,
  };

  const axe = {
    Durability: 20,
    Power: 86,
  };

  const data: ReactNode[][] = [
    ['Token ticker', 'DREAM_ART', 'MAGIC_AXE', 'GOLD'],
    ['Name', 'Sea of Dreams', 'Magic Battle Axe', 'Gold Coins'],
    ['Royalty', '2.5%', '3.0%', '1.0%'],
    ['Custom attributes', JSON.stringify(art, null, 2), JSON.stringify(axe, null, 2), `-`],
    ['Quantity', '1', '400', '25000'],
    ['Mintable', 'False', 'False', 'True'],
    ['URL', 'thenewboston.com/art', 'thenewboston.com/game', 'thenewboston.com/game'],
  ];

  const renderTableHeaders = (cols: ReactNode[]): ReactNode => {
    return (
      <>
        {cols.map((col, index) => (
          <th className="TokenMinting__table-thead-th" key={index}>
            {col}
          </th>
        ))}
      </>
    );
  };

  const renderTableRows = (rows: ReactNode[][]): ReactNode => {
    return (
      <>
        {rows.map((row, index) => (
          <tr className="TokenMinting__table-tbody-tr" key={index}>
            {row.map((cell, idx) => (
              <td className="TokenMinting__table-tbody-tr-td" key={idx}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </>
    );
  };

  return (
    <section id={AdditionalFeaturesId.TokenMinting}>
      <h3 className="AdditionalFeatures__section-sub-heading">Token Minting</h3>
      <p className="AdditionalFeatures__section-paragraph">
        Once they create a collection, collection managers can mint tokens by providing the following information:
      </p>
      <section className="AdditionalFeatures__section">
        <DataTable
          className="Collections"
          columns={['Attribute', 'Required?', 'Definition']}
          data={[
            ['Token ticker', 'Yes', ' Unique (per collection) abbreviation used as an identifier'],
            ['Image', 'No / Optional', 'URL of the image to be used as the visual for the token'],
            ['Name', 'Yes', 'Human-readable name of the token'],
            ['Description', 'Yes', 'Outline//information about the collection'],
            [
              'Royalty',
              'No / Optional',
              'Percentage paid to the collection manager when the token is traded on the exchange',
            ],
            ['Custom attributes', 'No / Optional', 'Key-value pairs used to describe the token'],
            ['Quantity', 'Yes', 'Amount of tokens to be minted'],
            [
              'Mintable',
              'Yes',
              'Boolean showing whether new tokens can be minted (one way switch, once set to False it can never be set to True again)',
            ],
            ['URL', 'No / Optional', 'URL for token, game, or app related documentation/information'],
          ]}
        />
        <p className="AdditionalFeatures__section-paragraph">
          Collection managers cannot change the token ticker. They can also update all other fields, aside from mintable
          and quantity (depending on mintable status). Collection managers must also pay a token minting fee during the
          minting process, which will be set on-chain by the government. This fee derives from the maximum number of
          bytes required by the network, which will be correlated to the amount of custom attributes. When the token is
          listed on the exchange,{' '}
          <span
            className="AdditionalFeatures__section-paragraph
            AdditionalFeatures__section-text--bold"
          >
            it uses a full token identifier, which follows the format:
          </span>
        </p>
        <p className="AdditionalFeatures__section-paragraph AdditionalFeatures__section-text--bold">
          COLLECTION_TICKER.TOKEN_TICKER
        </p>
        <p className="AdditionalFeatures__section-paragraph AdditionalFeatures__section-paragraph--mb-32">
          Royalties encourage collection managers to maintain and continuously improve their games or apps by providing
          them with an ongoing revenue stream when tokens are traded on the exchange. Below are examples of tokens that
          can be minted and distributed under this system.
        </p>
      </section>

      <section className="TokenMinting__table-section">
        <table className="TokenMinting__table">
          <thead className="TokenMinting__table-thead">{renderTableHeaders(columns)}</thead>
          <tbody className="TokenMinting__table-tbody">{renderTableRows(data)}</tbody>
        </table>
      </section>
    </section>
  );
};

export default TokenMinting;
