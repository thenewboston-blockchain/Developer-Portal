import React, {ReactNode, useState} from 'react';

import {DevToolType, Language} from 'types/developer-tools';

import Layout from './components/Layout';
import ConfirmationModal from '../components/ConfirmationModal';
import HeroImg from '../assets/hero-img.svg';
import {LIBRARIES, SDKS} from '../constants';

import './SDKsAndLibraries.scss';

import dotnetBg from '../assets/tile-bg-dotnet.svg';
import javascriptBg from '../assets/tile-bg-javascript.svg';
import pythonBg from '../assets/tile-bg-python.svg';
import kotlinBg from '../assets/tile-bg-kotlin.svg';
import defaultBg from '../assets/tile-bg.svg';

const SDKsAndLibraries = () => {
  const [goToUrl, setGoToUrl] = useState<string | null>(null);

  const getTileBgUrl = (language?: string): string => {
    switch (language) {
      case Language.dotNet:
        return dotnetBg;
      case Language.javascript:
        return javascriptBg;
      case Language.kotlin:
        return kotlinBg;
      case Language.python:
        return pythonBg;
      default:
        return defaultBg;
    }
  };

  const renderTiles = (items: DevToolType[], selectedLanguages: Language[], section: string): ReactNode => {
    const filteredItems = selectedLanguages.length
      ? items.filter((item) => item.language && selectedLanguages.includes(item.language))
      : items;

    if (!filteredItems.length) {
      return <div className="SDKsAndLibraries__section-tiles-empty">No {section} found for selected language(s).</div>;
    }

    return (
      <>
        {filteredItems.map((item) => (
          <div
            key={item.title}
            className="SDKsAndLibraries__section-tile"
            role="button"
            tabIndex={0}
            onClick={() => setGoToUrl(item.url)}
          >
            <div
              className="SDKsAndLibraries__section-tile-top"
              style={{background: `url(${getTileBgUrl(item.language)})`}}
            />
            <div className="SDKsAndLibraries__section-tile-bottom">
              <h3 className="SDKsAndLibraries__section-tile-bottom-title">{item.title}</h3>
              <p className="SDKsAndLibraries__section-tile-bottom-description">{item.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <Layout pageName="SDKs & Libraries">
      {(selectedLanguages) => (
        <>
          <div className="SDKsAndLibraries__hero">
            <div className="SDKsAndLibraries__hero-left">
              <small className="SDKsAndLibraries__hero-left-tnb">thenewboston</small>
              <h1 className="SDKsAndLibraries__hero-left-title">SDKs & Libraries</h1>
            </div>
            <div className="SDKsAndLibraries__hero-right">
              <img className="SDKsAndLibraries__hero-right-img" src={HeroImg} alt="Laptop" />
            </div>
          </div>
          <section className="SDKsAndLibraries__section">
            <h3 className="SDKsAndLibraries__section-title">Libraries</h3>
            <div className="SDKsAndLibraries__section-tiles">
              {renderTiles(LIBRARIES, selectedLanguages, 'Libraries')}
            </div>
          </section>
          <section className="SDKsAndLibraries__section">
            <h3 className="SDKsAndLibraries__section-title">SDKs</h3>
            <div className="SDKsAndLibraries__section-tiles">{renderTiles(SDKS, selectedLanguages, 'SDKs')}</div>
          </section>
          <ConfirmationModal url={goToUrl} onClose={() => setGoToUrl(null)} />
        </>
      )}
    </Layout>
  );
};

export default SDKsAndLibraries;
