import React, {FC, ReactNode, useState} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {A} from 'components';
import {ROUTES, URLS} from 'constants/routes';
import './TopNavMobileMenu.scss';

interface ComponentProps {
  closeMenu(): void;
  menuOpen: boolean;
  toggleMenu(): void;
}

type SectionStrings = 'whitepaper' | 'app-submission-guide' | 'tools' | 'tutorials';

const TopNavMobileMenu: FC<ComponentProps> = ({closeMenu, menuOpen, toggleMenu}) => {
  const [openSection, setOpenSection] = useState<SectionStrings | null>(null);

  const handleColumnTitleClick = (section: SectionStrings) => (): void => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderColumn = (section: SectionStrings, title: string, links: ReactNode): ReactNode => {
    return (
      <div className="TopNavMobileMenu__column">
        <button className="TopNavMobileMenu__title-wrapper" onClick={handleColumnTitleClick(section)}>
          <span className="TopNavMobileMenu__column-title TopNavMobileMenu__column-title--accordion">{title}</span>
          <span className="TopNavMobileMenu__icon-holder">
            <Icon
              className={clsx('TopNavMobileMenu__chevron-icon', {
                'TopNavMobileMenu__chevron-icon--open': openSection === section,
              })}
              icon={IconType.chevronDown}
            />
          </span>
        </button>
        <div className="TopNavMobileMenu__links">{openSection === section ? links : null}</div>
      </div>
    );
  };

  const renderMenu = (): ReactNode => {
    return (
      <>
        <div className="TopNavMobileMenu__dropdown-container">
          <div className="TopNavMobileMenu__links-container">
            {renderColumn(
              'whitepaper',
              'Living Whitepaper',
              <>
                {renderMobileLink('Home', ROUTES.whitepaper.home)}
                {renderMobileLink('Network Entities', ROUTES.whitepaper.principalEntities)}
                {renderMobileLink('Network Events and Processes', ROUTES.whitepaper.principalEvents)}
                {renderMobileLink('Architecture Details', ROUTES.whitepaper.architecture)}
                {renderMobileLink('Additional Features', ROUTES.whitepaper.additionalFeatures)}
              </>,
            )}
            {renderColumn(
              'app-submission-guide',
              'App Submission Guide',
              <>
                {renderMobileLink('App Submission Guide', ROUTES.projects.home)}
                {renderMobileLink('Rules and Guidelines', ROUTES.projects.rules)}
              </>,
            )}
            {renderColumn('tutorials', 'Tutorials', <>{renderMobileLink('Tutorials', ROUTES.tutorials)}</>)}
            {renderColumn(
              'tools',
              'Tools',
              <>
                {renderMobileLink('APIs', ROUTES.tools.apis)}
                {renderMobileLink('Node Deployment', ROUTES.tools.nodeDeployment)}
                {renderMobileLink('SDKs & Libraries', ROUTES.tools.sdksAndLibraries)}
                {renderMobileLink('Utilities', ROUTES.tools.utilities)}
              </>,
            )}
          </div>
        </div>
        <div className="TopNavMobileMenu__overlay" onClick={closeMenu} role="button" tabIndex={0} />
      </>
    );
  };

  const renderMobileLink = (label: string, to: string, isExternal?: boolean): ReactNode => {
    if (isExternal) {
      return (
        <A className="TopNavMobileMenu__link" href={to} newWindow={false}>
          {label}
        </A>
      );
    }
    return (
      <Link className="TopNavMobileMenu__link" to={to}>
        {label}
      </Link>
    );
  };

  return (
    <div className="TopNavMobileMenu">
      <A className="TopNavMobileMenu__home" href={URLS.website.home}>
        thenewboston.com
      </A>
      <button className="TopNavMobileMenu__button" onClick={toggleMenu}>
        <Icon icon={IconType.menu} size={24} />
      </button>
      {menuOpen && renderMenu()}
    </div>
  );
};

export default TopNavMobileMenu;
