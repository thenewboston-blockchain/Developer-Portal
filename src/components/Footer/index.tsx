import React, {FC, memo, useCallback} from 'react';
import {Link, useHistory} from 'react-router-dom';
import clsx from 'clsx';

import Logo from 'assets/svgs/thenewboston-white.svg';
import {Button, SocialMediaIcon} from 'components';
import {SocialMedia} from 'types/social-media';

import FooterNavList from './FooterNavList';
import './Footer.scss';

interface ComponentProps {
  className?: string;
}

const navLists = [
  {
    header: 'Living Whitepaper',
    links: [
      {
        title: 'Principal Entities on the Network',
        url: '/whitepaper/principal-entities',
      },
      {
        title: 'Principal Events and Processes on the Network',
        url: '/whitepaper/principal-events',
      },
      {
        title: 'Architecture - Deep Dive',
        url: '/whitepaper/architecture',
      },
    ],
  },
  {
    header: 'Projects',
    links: [
      {
        isExternal: true,
        title: 'Propose Project',
        url:
          'https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT',
      },
      {
        title: 'Approved Projects',
        url: '/projects/approved-projects',
      },
      {
        title: 'Rules & Guidelines',
        url: '/projects/rules',
      },
    ],
  },
  {
    header: 'Tools',
    links: [
      {
        title: 'APIs',
        url: '/api',
      },
      {
        title: 'SDKs & Libraries',
        url: '/sdks-and-libraries',
      },
    ],
  },
  {
    header: 'Legal',
    links: [
      {
        title: 'Community Guidelines',
        url: '/guidelines',
      },
      {
        title: 'Terms of Use',
        url: '/terms-of-use',
      },
      {
        title: 'Privacy Policy',
        url: '/privacy-policy',
      },
    ],
  },
];

const Footer: FC<ComponentProps> = ({className}) => {
  const history = useHistory();

  const renderSocialMediaLinks = useCallback(
    () =>
      [
        SocialMedia.github,
        SocialMedia.youtube,
        SocialMedia.reddit,
        SocialMedia.linkedin,
        SocialMedia.facebook,
        SocialMedia.instagram,
        SocialMedia.twitter,
        SocialMedia.discord,
        SocialMedia.twitch,
        SocialMedia.pinterest,
      ].map((website) => (
        <SocialMediaIcon
          className="Footer__SocialMediaLink"
          iconSize={28}
          key={website}
          totalSize={28}
          website={website}
        />
      )),
    [],
  );

  const renderNavLists = useCallback(
    () => navLists.map((list) => <FooterNavList header={list.header} key={list.header} links={list.links} />),
    [],
  );

  return (
    <footer className={clsx('Footer', className)} data-testid="Footer">
      <div className="Footer__left">
        <div className="Footer__left-brand-details">
          <Link to="/">
            <img src={Logo} alt="thenewboston logo" />
          </Link>
          <div className="Footer__social-media-links">{renderSocialMediaLinks()}</div>
        </div>
        <Button className="Footer__download-button" onClick={() => history.push('/download')} variant="outlined">
          Download Wallet
        </Button>
      </div>
      <div className="Footer__right">{renderNavLists()}</div>
    </footer>
  );
};

export default memo(Footer);
