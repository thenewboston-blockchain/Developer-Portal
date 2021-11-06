import React, {ReactNode, useState} from 'react';

import type {DevToolType} from 'types/developer-tools';

import {Container} from 'components';
import ConfirmationModal from '../components/ConfirmationModal';
import {UTILITIES} from '../constants';

import './Utilities.scss';

const Utilities = () => {
  const [goToUrl, setGoToUrl] = useState<string | null>(null);

  const renderTiles = (items: DevToolType[], section: string): ReactNode => {
    if (!items.length) {
      return <div className="Utilities__section-tiles-empty">No {section} found for selected language(s).</div>;
    }

    return (
      <>
        {items.map((item) => (
          <div
            key={item.title}
            className="Utilities__section-tile"
            role="button"
            tabIndex={0}
            onClick={() => setGoToUrl(item.url)}
          >
            <div className="Utilities__section-tile-top">
              <div className="Utilities__section-tile-top-pill">
                <h2 className="Utilities__section-tile-top-pill-text">{item.title}</h2>
              </div>
            </div>
            <div className="Utilities__section-tile-bottom">
              <h3 className="Utilities__section-tile-bottom-title">{item.title}</h3>
              <p className="Utilities__section-tile-bottom-description">{item.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <Container>
      <section className="Utilities__section">
        <h3 className="Utilities__section-title">Utilities</h3>
        <div className="Utilities__section-tiles">{renderTiles(UTILITIES, 'Utilities')}</div>
      </section>
      <ConfirmationModal url={goToUrl} onClose={() => setGoToUrl(null)} />
    </Container>
  );
};

export default Utilities;
