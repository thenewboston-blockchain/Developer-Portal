import React, {FC} from 'react';
import {Icon, IconType} from '@thenewboston/ui';

import {Button} from 'components';
import {URLS} from 'constants/routes';
import {socialMediaUrls} from 'utils/social-media';

import './DeveloperPortalHero.scss';

const DeveloperPortalHero: FC = () => {
  const handleProposeProjectClick = () => window.open(URLS.github.proposeProjects, '_blank', 'noreferrer noopener');

  const handleDiscordClick = () => window.open(socialMediaUrls.discord, '_blank', 'noreferrer noopener');

  return (
    <div className="DeveloperPortalHero">
      <h1 className="DeveloperPortalHero__title">
        Build with <br />
        thenewboston
      </h1>
      <p className="DeveloperPortalHero__description">Explore our guides and examples to integrate TNBC.</p>
      <div className="DeveloperPortalHero__buttons">
        <Button color="quaternary" className="DeveloperPortalHero__button" onClick={handleProposeProjectClick}>
          Propose Project
        </Button>
        <Button
          className="DeveloperPortalHero__button"
          color="quaternary"
          variant="outlined"
          onClick={handleDiscordClick}
        >
          <Icon icon={IconType.discord} />
          Discord
        </Button>
      </div>
    </div>
  );
};

export default DeveloperPortalHero;
