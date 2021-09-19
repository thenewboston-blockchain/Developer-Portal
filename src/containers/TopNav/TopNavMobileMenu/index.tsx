import React, {FC, ReactNode, useState} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {A} from 'components';
import './TopNavMobileMenu.scss';

interface ComponentProps {
  closeMenu(): void;
  menuOpen: boolean;
  smallDevice: boolean;
  toggleMenu(): void;
}

type SectionStrings = 'whitepaper' | 'projects' | 'developer';

const TopNavMobileMenu: FC<ComponentProps> = ({closeMenu, menuOpen, smallDevice, toggleMenu}) => {
  const [openSection, setOpenSection] = useState<SectionStrings | null>(null);

  const handleColumnTitleClick = (section: SectionStrings) => (): void => {
    if (!smallDevice) return;
    setOpenSection(openSection === section ? null : section);
  };

  const renderColumn = (section: SectionStrings, title: string, links: ReactNode): ReactNode => {
    return (
      <div className="TopNavMobileMenu__column">
        <button className="TopNavMobileMenu__title-wrapper" onClick={handleColumnTitleClick(section)}>
          <span className="TopNavMobileMenu__column-title TopNavMobileMenu__column-title--accordion">{title}</span>
          {smallDevice && (
            <span className="TopNavMobileMenu__icon-holder">
              <Icon
                className={clsx('TopNavMobileMenu__chevron-icon', {
                  'TopNavMobileMenu__chevron-icon--open': openSection === section,
                })}
                icon={IconType.chevronDown}
              />
            </span>
          )}
        </button>
        <div className="TopNavMobileMenu__links">{!smallDevice || openSection === section ? links : null}</div>
      </div>
    );
  };

  const renderMenu = (): ReactNode => {
    return (
      <>
        <div className="TopNavMobileMenu__dropdown-container">
          <div className="TopNavMobileMenu__links-container">
            {renderColumn('developer', 'Developer', <>{renderMobileLink('Home', '/')}</>)}
            {renderColumn(
              'whitepaper',
              'Living Whitepaper',
              <>
                {renderMobileLink('Home', '/whitepaper')}
                {renderMobileLink('Principal Entities on the Network', '/whitepaper/principal-entities')}
                {renderMobileLink('Principal Events and Processes on the Network', '/whitepaper/principal-events')}
                {renderMobileLink('Architecture Deep Dive', '/whitepaper/architecture')}
              </>,
            )}
            {renderColumn(
              'projects',
              'Projects',
              <>
                {renderMobileLink('Home', '/projects')}
                {renderMobileLink('Approved Projects', '/projects/approved-projects')}
                {renderMobileLink('Projects Rules and Guidelines', '/projects/rules')}
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
      <button className="TopNavMobileMenu__button" onClick={toggleMenu}>
        <Icon icon={IconType.menu} size={24} />
      </button>
      {menuOpen && renderMenu()}
    </div>
  );
};

export default TopNavMobileMenu;
