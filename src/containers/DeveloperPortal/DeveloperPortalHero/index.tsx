import React, {FC} from 'react';
import {Icon, IconType} from '@thenewboston/ui';

import {Button} from 'components';

import './DeveloperPortalHero.scss';

const DeveloperPortalHero: FC = () => {
  return (
    <div className="DeveloperPortalHero">
      <h1 className="DeveloperPortalHero__title">
        Build with <br />
        thenewboston
      </h1>
      <p className="DeveloperPortalHero__description">Explore our guides and examples to integrate TNBC.</p>
      <div className="DeveloperPortalHero__buttons">
        <Button color="quaternary" className="DeveloperPortalHero__button">
          Propose Project
        </Button>
        <Button className="DeveloperPortalHero__button" color="quaternary" variant="outlined">
          <Icon icon={IconType.discord} />
          Discord
        </Button>
      </div>
    </div>
  );
};

export default DeveloperPortalHero;
