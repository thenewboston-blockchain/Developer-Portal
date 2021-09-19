import React from 'react';
import {Link} from 'react-router-dom';

import './TopNavDesktopItems.scss';

const TopNavDesktopItems = () => (
  <>
    <Link className="TopNavDesktopItems__right-item TopNavDesktopItems__link" tabIndex={-1} to="/">
      Developer
    </Link>
    <Link className="TopNavDesktopItems__right-item TopNavDesktopItems__link" tabIndex={-1} to="/whitepaper">
      Living Whitepaper
    </Link>
    <Link className="TopNavDesktopItems__right-item TopNavDesktopItems__link" tabIndex={-1} to="/projects">
      Projects
    </Link>
  </>
);

export default TopNavDesktopItems;
