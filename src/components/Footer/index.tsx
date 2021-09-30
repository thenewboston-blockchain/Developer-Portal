import React, {FC, memo, useCallback} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import TNBLogo from 'assets/images/TNB-Logo.png';
import {SocialMediaIcon} from 'components';
import {ROUTES, URLS} from 'constants/routes';
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
        url: ROUTES.whitepaper.principalEntities,
      },
      {
        title: 'Principal Events and Processes on the Network',
        url: ROUTES.whitepaper.principalEvents,
      },
      {
        title: 'Architecture - Deep Dive',
        url: ROUTES.whitepaper.architecture,
      },
    ],
  },
  {
    header: 'Projects',
    links: [
      {
        isExternal: true,
        title: 'Propose Project',
        url: URLS.github.proposeProjects,
      },
      {
        title: 'Approved Projects',
        url: ROUTES.projects.approvedProjects,
      },
      {
        title: 'Rules & Guidelines',
        url: ROUTES.projects.rules,
      },
    ],
  },
  {
    header: 'Tools',
    links: [
      {
        title: 'APIs',
        url: ROUTES.tools.apis,
      },
      {
        title: 'SDKs & Libraries',
        url: ROUTES.tools.sdks,
      },
    ],
  },
  {
    header: 'Legal',
    links: [
      {
        title: 'Community Guidelines',
        url: ROUTES.legal.guidelines,
      },
      {
        title: 'Terms of Use',
        url: ROUTES.legal.termsOfUse,
      },
      {
        title: 'Privacy Policy',
        url: ROUTES.legal.privacyPolicy,
      },
    ],
  },
];

const Footer: FC<ComponentProps> = ({className}) => {
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
          <Link className="Footer__logo" to="/">
            <img src={TNBLogo} alt="thenewboston logo" height={30} />
            <div className="Footer__logo-text">developer</div>
          </Link>
          <div className="Footer__social-media-links">{renderSocialMediaLinks()}</div>
        </div>
      </div>
      <div className="Footer__right">{renderNavLists()}</div>
    </footer>
  );
};

export default memo(Footer);
