import React, {FC} from 'react';

import {ProgressiveImage} from 'components';
import {useWindowDimensions} from 'hooks';
import Particles from '../Particles';
import developerPortalImage from './Portal.webp';
import developerPortalPlaceholderImage from './PortalPlaceholder.webp';

import './DeveloperPortalHero.scss';

const DeveloperPortalHero: FC = () => {
  const {width} = useWindowDimensions();

  let imageSize: number;
  if (width < 768) {
    imageSize = 280;
  } else if (width < 992) {
    imageSize = 412;
  } else {
    imageSize = 558;
  }

  return (
    <div className="DeveloperPortalHero">
      <Particles />
      <ProgressiveImage
        alt="Developer Portal"
        containerClassName="DeveloperPortalHero__main-image"
        height={imageSize}
        placeholderSrc={developerPortalPlaceholderImage}
        realSrc={developerPortalImage}
        width={imageSize}
      />
    </div>
  );
};

export default DeveloperPortalHero;
