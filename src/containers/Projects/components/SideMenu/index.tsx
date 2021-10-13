import React, {FC, useState} from 'react';
import clsx from 'clsx';
import {useLocation, useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {A, ReactScrollLink} from 'components';
import {NAVBAR_HEIGHT} from 'constants/offsets';

import {PATHNAME_TO_DROPDOWN_SELECTIONS, approvedProjectsPath, projectRulesPath} from '../../constants';

import './SideMenu.scss';

type Props = {
  breadcrumbHeight: number;
  approvedProjectUrls?:
    | {
        title: string;
        url: string;
      }[]
    | null;
};

const SideMenu: FC<Props> = ({approvedProjectUrls, breadcrumbHeight}) => {
  const {pathname} = useLocation();
  const history = useHistory();

  const isApprovedProjectsSelected = pathname.includes(approvedProjectsPath);
  const isProjectRulesSelected = pathname.includes(projectRulesPath);

  const [shouldOpenApprovedProjects, setShouldOpenApprovedProjects] = useState(isApprovedProjectsSelected);
  const [shouldOpenProjectRules, setShouldOpenProjectRules] = useState(isProjectRulesSelected);

  return (
    <div className="ProjectsSideMenu">
      <div className="ProjectsSideMenu__section">
        <button
          className={clsx(
            'ProjectsSideMenu__section-header',
            isApprovedProjectsSelected && 'ProjectsSideMenu__section-header--active',
          )}
          onClick={() => {
            if (!isApprovedProjectsSelected) {
              history.push(approvedProjectsPath);
            } else {
              setShouldOpenApprovedProjects((isOpened) => !isOpened);
            }
          }}
        >
          <div>Approved Projects</div>
          <Icon
            className="ProjectsSideMenu__toggle-icon"
            icon={isApprovedProjectsSelected && shouldOpenApprovedProjects ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        <div className="ProjectsSideMenu__approved-projects-container">
          {isApprovedProjectsSelected &&
            shouldOpenApprovedProjects &&
            approvedProjectUrls &&
            approvedProjectUrls.map((selection) => {
              const isActive = pathname === selection.url;
              return (
                <Link
                  className={clsx('ProjectsSideMenu__link', {'ProjectsSideMenu__link--active': isActive})}
                  to={selection.url}
                  key={selection.url}
                >
                  {selection.title}
                </Link>
              );
            })}
        </div>
      </div>
      <div className="ProjectsSideMenu__section">
        <button
          className={clsx(
            'ProjectsSideMenu__section-header',
            isProjectRulesSelected && 'ProjectsSideMenu__section-header--active',
          )}
          onClick={() => {
            if (!isProjectRulesSelected) {
              history.push(projectRulesPath);
            } else {
              setShouldOpenProjectRules((isOpened) => !isOpened);
            }
          }}
        >
          <div>Rules &amp; Guidelines</div>
          <Icon
            className="ProjectsSideMenu__toggle-icon"
            icon={isProjectRulesSelected && shouldOpenProjectRules ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </button>
        {isProjectRulesSelected &&
          shouldOpenProjectRules &&
          PATHNAME_TO_DROPDOWN_SELECTIONS.rules.map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <ReactScrollLink
                activeClass="ProjectsSideMenu__link--active"
                className={clsx('ProjectsSideMenu__link')}
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + breadcrumbHeight)}
                to={selectionHash}
              >
                {selection.title}
              </ReactScrollLink>
            );
          })}
      </div>
      <div className="ProjectsSideMenu__section">
        <A
          className="ProjectsSideMenu__section-header"
          href="https://github.com/thenewboston-developers/Projects/issues/new?assignees=&labels=Project&template=project-proposal.md&title=NAME_OF_YOUR_PROJECT"
        >
          Propose a Project
        </A>
      </div>
    </div>
  );
};

export default SideMenu;
