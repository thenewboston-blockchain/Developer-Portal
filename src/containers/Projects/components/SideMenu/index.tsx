import React, {FC, useState} from 'react';
import clsx from 'clsx';
import {useHistory, useLocation} from 'react-router';
import {Icon, IconType} from '@thenewboston/ui';

import {ReactScrollLink} from 'components';
import {NAVBAR_HEIGHT} from 'constants/offsets';

import {PATHNAME_TO_DROPDOWN_SELECTIONS, projectRulesPath} from '../../constants';

import './SideMenu.scss';

type Props = {
  breadcrumbHeight: number;
};

const SideMenu: FC<Props> = ({breadcrumbHeight}) => {
  const {pathname} = useLocation();
  const history = useHistory();

  const isProjectRulesSelected = pathname.includes(projectRulesPath);

  const [shouldOpenProjectRules, setShouldOpenProjectRules] = useState(isProjectRulesSelected);

  return (
    <div className="ProjectsSideMenu">
      <div className="ProjectsSideMenu__section">
        <button
          className="ProjectsSideMenu__section-header"
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
    </div>
  );
};

export default SideMenu;
