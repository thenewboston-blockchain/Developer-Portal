import React, {useCallback, useState} from 'react';
import {useLocation} from 'react-router';
import {IconType} from '@thenewboston/ui';

import {BreadcrumbSection, Popover} from 'components';
import {BREADCRUMB_HEIGHT, NAVBAR_HEIGHT} from 'constants/offsets';
import {useWindowDimensions} from 'hooks';
import {SFC} from 'types/generic';
import {Language} from 'types/developer-tools';

import {PATHNAME_TO_TITLE_MAPPING, TOOLS_DROPDOWN_SELECTIONS} from '../../../constants';
import Filters from '../Filters';

import * as S from './Styles';

type Props = {
  selectedLanguages?: string[];
  toggleLanguage?: (language: Language) => void;
};

const DO_NOTHING = () => {};

const Breadcrumb: SFC<Props> = ({selectedLanguages, toggleLanguage}) => {
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
    <S.Container>
      <BreadcrumbSection
        isItemsInSamePage
        isSectionSelected={false}
        hasItems={false}
        scrollOffset={-(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT)}
        title="Developer"
        titleLink="/"
      />
      <BreadcrumbSection
        isItemsInSamePage={false}
        isSectionSelected={false}
        items={TOOLS_DROPDOWN_SELECTIONS}
        hasItems
        hasPrecedingArrowIcon
        hasPrecedingArrowIcon992px
        scrollOffset={-(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT)}
        shouldShowDropdownByDefault
        title="Tools"
        titleLink="/"
      />
      {pathnames.map((pathname) => {
        return (
          <BreadcrumbSection
            isItemsInSamePage
            isSectionSelected
            hasItems={false}
            key={pathname}
            scrollOffset={-(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT)}
            title={PATHNAME_TO_TITLE_MAPPING[pathname]}
            titleLink={`${pathname}`}
          />
        );
      })}
      {/* Filter */}
      {Boolean(width < 992) && (
        <>
          <S.Icon icon={IconType.filterMenu} onClick={handleButtonClick} size={20} />
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
    </S.Container>
  );
};

export default Breadcrumb;
