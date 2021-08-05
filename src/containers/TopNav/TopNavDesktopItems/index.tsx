import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {IconType} from '@thenewboston/ui';

import {Button} from 'components';
import TopNavPopover, {TopNavPopoverItemType} from 'containers/TopNav/TopNavPopover';

import './TopNavDesktopItems.scss';

const communityPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Discord, GitHub, YouTube, LinkedIn, etc',
    iconType: IconType.earth,
    title: 'Join the Community!',
    to: '/social',
  },
  {
    description: 'Stay up to date with our weekly sprints',
    iconType: IconType.chartTimelineVariantShimmer,
    title: 'Weekly Progress',
    to: '/progress',
  },
  {
    description: 'Join the team building the app',
    iconType: IconType.humanHandsup,
    title: 'Openings',
    to: '/openings',
  },
  {
    description: 'Read up on our community culture',
    iconType: IconType.notebookCheckOutline,
    title: 'Community Guidelines',
    to: '/guidelines',
  },
  {
    description: 'Stay updated with our latest articles',
    iconType: IconType.textBox,
    isExternal: true,
    title: 'Blog',
    to: 'https://blog.thenewboston.com',
  },
];

const getStartedPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Pick up tasks within GitHub and earn coins',
    iconSize: 28,
    iconType: IconType.github,
    title: 'Tasks',
    to: '/tasks',
  },
  {
    description: 'Propose ideas you want built',
    iconType: IconType.hammerWrench,
    title: 'Projects',
    to: '/projects',
  },
];

const resourcesPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Start reading into Guides',
    iconType: IconType.fileDocument,
    title: 'Documentation',
    to: '/wallet',
  },
  {
    description: 'Watch tutorials made by the community',
    iconType: IconType.playBoxMultiple,
    title: 'Tutorials',
    to: '/tutorials',
  },
  {
    description: 'Download thenewboston assets',
    iconType: IconType.fileDownload,
    title: 'Media Kit',
    to: '/assets',
  },
];

const aboutPopoverItems: TopNavPopoverItemType[] = [
  {
    description: 'Meet our awesome teams',
    iconType: IconType.accountGroup,
    title: 'Teams',
    to: '/teams',
  },
  {
    description: 'Support thenewboston',
    iconType: IconType.currencyUsd,
    title: 'Donate',
    to: '/donate',
  },
];

const TopNavDesktopItems = () => {
  const [communityAnchorEl, setCommunityAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [getStartedAnchorEl, setGetStartedAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [aboutAnchorEl, setAboutAnchorEl] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      <TopNavPopover
        anchorEl={getStartedAnchorEl}
        buttonText="Get Started"
        className="TopNavDesktopItems__right-item"
        items={getStartedPopoverItems}
        popoverId="get-started-popover"
        setAnchorEl={setGetStartedAnchorEl}
      />
      <TopNavPopover
        anchorEl={communityAnchorEl}
        buttonText="Community"
        className="TopNavDesktopItems__right-item"
        items={communityPopoverItems}
        popoverId="community-popover"
        setAnchorEl={setCommunityAnchorEl}
      />
      <Link className="TopNavDesktopItems__right-item TopNavDesktopItems__link" tabIndex={-1} to="/">
        Developer
      </Link>
      <TopNavPopover
        anchorEl={resourcesAnchorEl}
        buttonText="Resources"
        className="TopNavDesktopItems__right-item"
        items={resourcesPopoverItems}
        popoverId="resources-popover"
        setAnchorEl={setResourcesAnchorEl}
      />
      <TopNavPopover
        anchorEl={aboutAnchorEl}
        buttonText="About"
        className="TopNavDesktopItems__right-item"
        items={aboutPopoverItems}
        popoverId="about-popover"
        setAnchorEl={setAboutAnchorEl}
      />
      <Link className="TopNavDesktopItems__right-item TopNavDesktopItems__link" tabIndex={-1} to="/faq">
        FAQ
      </Link>
      <div className="TopNavDesktopItems__separator" />
      <Link className="TopNavDesktopItems__right-item TopNavDesktopItems__download-button" tabIndex={-1} to="/download">
        <Button>Download Wallet</Button>
      </Link>
    </>
  );
};

export default TopNavDesktopItems;
