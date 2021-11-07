import React, {FC} from 'react';
import {useHistory, useLocation} from 'react-router';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {ReactScrollLink} from 'components';
import {NAVBAR_HEIGHT} from 'constants/offsets';
import {
  architecturePath,
  PATHNAME_TO_DROPDOWN_SELECTIONS,
  principalEntitiesPath,
  principalEventsPath,
} from '../../constants';

import './SideMenu.scss';

type Props = {
  breadcrumbHeight: number;
};

const SideMenu: FC<Props> = ({breadcrumbHeight}) => {
  const {pathname} = useLocation();
  const history = useHistory();

  const isPrincipalEntitiesSelected = pathname.includes(principalEntitiesPath);
  const isPrincipalEventsSelected = pathname.includes(principalEventsPath);
  const isArchitectureSelected = pathname.includes(architecturePath);

  return (
    <div className="LivingWhitepaperSideMenu">
      <div className="LivingWhitepaperSideMenu__section">
        <button
          className={clsx(
            'LivingWhitepaperSideMenu__section-header',
            isPrincipalEntitiesSelected && 'LivingWhitepaperSideMenu__section-header--active',
          )}
          onClick={() => history.push(principalEntitiesPath)}
        >
          <div>Principle Entities on the Network</div>
          <Icon
            className="LivingWhitepaperSideMenu__toggle-icon"
            icon={isPrincipalEntitiesSelected ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        {isPrincipalEntitiesSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS['principal-entities'].map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <ReactScrollLink
                activeClass="LivingWhitepaperSideMenu__link--active"
                className={clsx('LivingWhitepaperSideMenu__link')}
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + breadcrumbHeight)}
                to={selectionHash}
              >
                {selection.title}
              </ReactScrollLink>
            );
          })}
      </div>

      <div className="LivingWhitepaperSideMenu__section">
        <button
          className={clsx(
            'LivingWhitepaperSideMenu__section-header',
            isPrincipalEventsSelected && 'LivingWhitepaperSideMenu__section-header--active',
          )}
          onClick={() => history.push(principalEventsPath)}
        >
          <div>Principle Events and Processes on the Network</div>
          <Icon
            className="LivingWhitepaperSideMenu__toggle-icon"
            icon={isPrincipalEventsSelected ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        {isPrincipalEventsSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS['principal-events'].map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <ReactScrollLink
                activeClass="LivingWhitepaperSideMenu__link--active"
                className={clsx('LivingWhitepaperSideMenu__link')}
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + breadcrumbHeight)}
                to={selectionHash}
              >
                {selection.title}
              </ReactScrollLink>
            );
          })}
      </div>

      <div className="LivingWhitepaperSideMenu__section">
        <button
          className={clsx(
            'LivingWhitepaperSideMenu__section-header',
            isArchitectureSelected && 'LivingWhitepaperSideMenu__section-header--active',
          )}
          onClick={() => history.push(architecturePath)}
        >
          <div>Architecture - Deep Dive</div>
          <Icon
            className="LivingWhitepaperSideMenu__toggle-icon"
            icon={isArchitectureSelected ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        {isArchitectureSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS.architecture.map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <ReactScrollLink
                activeClass="LivingWhitepaperSideMenu__link--active"
                className={clsx('LivingWhitepaperSideMenu__link')}
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + breadcrumbHeight)}
                to={selectionHash}
              >
                {selection.title}
              </ReactScrollLink>
            );
          })}
      </div>
    </div>
  );
};

export default SideMenu;
