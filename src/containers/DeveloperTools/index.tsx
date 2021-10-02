import React, {ReactNode, useState} from 'react';

import type {Language, DevToolType} from 'types/developer-tools';

import DeveloperPortalLayout from './components/DeveloperPortalLayout';
import ConfirmationModal from './components/ConfirmationModal';
import HeroImg from './assets/hero-img.svg';
import {LIBRARIES, SDKS, UTILITIES} from './constants';

import './DeveloperTools.scss';

const DeveloperTools = () => {
  const [goToUrl, setGoToUrl] = useState<string | null>(null);

  const renderTiles = (items: DevToolType[], selectedLanguages: Language[], section: string): ReactNode => {
    const filteredItems = selectedLanguages.length
      ? items.filter((item) => item.language && selectedLanguages.includes(item.language))
      : items;

    if (!filteredItems.length) {
      return <div className="DeveloperTools__section-tiles-empty">No {section} found for selected language(s).</div>;
    }

    return (
      <>
        {filteredItems.map((item) => (
          <div
            key={item.title}
            className="DeveloperTools__section-tile"
            role="button"
            tabIndex={0}
            onClick={() => setGoToUrl(item.url)}
          >
            <div className="DeveloperTools__section-tile-top">
              <div className="DeveloperTools__section-tile-top-pill">
                <h2 className="DeveloperTools__section-tile-top-pill-text">{item.title}</h2>
              </div>
            </div>
            <div className="DeveloperTools__section-tile-bottom">
              <h3 className="DeveloperTools__section-tile-bottom-title">{item.title}</h3>
              <p className="DeveloperTools__section-tile-bottom-description">{item.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <DeveloperPortalLayout pageName="Developer Tools">
      {(selectedLanguages) => (
        <>
          <div className="DeveloperTools__hero">
            <div className="DeveloperTools__hero-left">
              <small className="DeveloperTools__hero-left-tnb">thenewboston</small>
              <h1 className="DeveloperTools__hero-left-title">Developer Tools</h1>
            </div>
            <div className="DeveloperTools__hero-right">
              <img className="DeveloperTools__hero-right-img" src={HeroImg} alt="Laptop" />
            </div>
          </div>
          <section className="DeveloperTools__section">
            <h3 className="DeveloperTools__section-title">Libraries</h3>
            <div className="DeveloperTools__section-tiles">
              {renderTiles(LIBRARIES, selectedLanguages, 'Libraries')}
            </div>
          </section>
          <section className="DeveloperTools__section">
            <h3 className="DeveloperTools__section-title">SDKs</h3>
            <div className="DeveloperTools__section-tiles">{renderTiles(SDKS, selectedLanguages, 'SDKs')}</div>
          </section>
          <section className="DeveloperTools__section">
            <h3 className="DeveloperTools__section-title">Utilities</h3>
            <div className="DeveloperTools__section-tiles">
              {renderTiles(UTILITIES, selectedLanguages, 'Utilities')}
            </div>
          </section>
          <ConfirmationModal url={goToUrl} onClose={() => setGoToUrl(null)} />
        </>
      )}
    </DeveloperPortalLayout>
  );
};

export default DeveloperTools;
