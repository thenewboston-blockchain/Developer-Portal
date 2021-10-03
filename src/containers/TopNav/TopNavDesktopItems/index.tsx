import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {A} from 'components';
import {ROUTES, URLS} from 'constants/routes';
import TopNavPopover, {TopNavPopoverItemType} from '../TopNavPopover';
import './TopNavDesktopItems.scss';

const toolsPopoverItems: TopNavPopoverItemType[] = [
  {
    title: 'APIs',
    to: ROUTES.tools.apis,
  },
  {
    title: 'Developer Tools',
    to: ROUTES.tools.developerTools,
  },
];

const TopNavDesktopItems = () => {
  const [toolsAnchorEl, setToolsAnchorEl] = useState<HTMLButtonElement | null>(null);
  return (
    <>
      <Link
        className="TopNavDesktopItems__right-item TopNavDesktopItems__link"
        tabIndex={-1}
        to={ROUTES.whitepaper.home}
      >
        Living Whitepaper
      </Link>
      <Link className="TopNavDesktopItems__right-item TopNavDesktopItems__link" tabIndex={-1} to={ROUTES.projects.home}>
        Projects
      </Link>
      <TopNavPopover
        anchorEl={toolsAnchorEl}
        buttonText="Tools"
        className="TopNavDesktopItems__right-item"
        items={toolsPopoverItems}
        popoverId="tools-popover"
        setAnchorEl={setToolsAnchorEl}
      />
      <div className="TopNavDesktopItems__separator" />
      <A className="TopNavDesktopItems__right-item TopNavDesktopItems__link" href={URLS.website.home}>
        thenewboston.com
      </A>
    </>
  );
};

export default TopNavDesktopItems;
