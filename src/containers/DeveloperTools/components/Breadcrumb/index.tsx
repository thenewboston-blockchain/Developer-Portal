import React, {useCallback, useState} from 'react';
import {useLocation} from 'react-router';
import {Icon, IconType} from '@thenewboston/ui';
import clsx from 'clsx';

import {Popover} from 'components';
import {NAVBAR_HEIGHT, BREADCRUMB_HEIGHT} from 'constants/offsets';
import {useWindowDimensions} from 'hooks';
import {SFC} from 'types/generic';
import {Language} from 'types/developer-tools';

import {PATHNAME_TO_TITLE_MAPPING} from '../../constants';
import BreadcrumbSection from '../../../../components/BreadcrumbSection';
import Filters from '../Filters';

import './Breadcrumb.scss';

type Props = {
  selectedLanguages?: string[];
  toggleLanguage?: (language: Language) => void;
  hasLanguageFilter?: boolean;
};

const DO_NOTHING = () => {};

const Breadcrumb: SFC<Props> = ({className, hasLanguageFilter = false, selectedLanguages, toggleLanguage}) => {
  const location = useLocation();
  const {width} = useWindowDimensions();
  const pathnames = location.pathname.slice(1).split('/');

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const isPopoverOpen = !!anchorEl;

  const unsetAnchorEl = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleButtonClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if (!anchorEl) {
      setAnchorEl(e.currentTarget);
      return;
    }
    unsetAnchorEl();
  };

  return (
    <div className={clsx('Breadcrumb', className)}>
      <BreadcrumbSection
        isItemsInSamePage
        isSectionSelected={false}
        hasItems={false}
        scrollOffset={-(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT)}
        title="Developer"
        titleLink="/"
      />
      <BreadcrumbSection
        disabled // no link under tools
        isItemsInSamePage
        isSectionSelected={false}
        hasItems={false}
        hasPrecedingArrowIcon
        hasPrecedingArrowIcon992px
        scrollOffset={-(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT)}
        title="Tools"
        titleLink=""
      />
      {pathnames.map((pathname, index) => {
        if (index === 0) {
          return (
            <BreadcrumbSection
              isItemsInSamePage
              isSectionSelected
              hasItems={false}
              hasPrecedingArrowIcon
              hasPrecedingArrowIcon992px
              key={pathname}
              scrollOffset={-(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT)}
              title={PATHNAME_TO_TITLE_MAPPING[pathname]}
              titleLink={`/developer/${pathname}`}
            />
          );
        }
        return null;
      })}
      {/* Filter */}
      {Boolean(width < 992) && hasLanguageFilter && (
        <>
          <Icon className="Breadcrumb__filter-icon" icon={IconType.filterMenu} onClick={handleButtonClick} size={20} />
          <Popover
            anchorEl={anchorEl}
            open={isPopoverOpen}
            closePopover={unsetAnchorEl}
            anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
            transformOrigin={{horizontal: 'center', vertical: 'top'}}
            transformOffset={{horizontal: 0, vertical: 16}}
          >
            <Filters selectedLanguages={selectedLanguages || []} toggleLanguage={toggleLanguage || DO_NOTHING} />
          </Popover>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
