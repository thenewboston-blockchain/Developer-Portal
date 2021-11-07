import React from 'react';
import {useLocation} from 'react-router';

import BreadcrumbSection from 'components/BreadcrumbSection';
import {BREADCRUMB_HEIGHT, NAVBAR_HEIGHT} from 'constants/offsets';
import {SFC} from 'types/generic';

import {PATHNAME_TO_TITLE_MAPPING, TOOLS_DROPDOWN_SELECTIONS} from '../../../constants';

import * as S from './Styles';

const Breadcrumb: SFC = () => {
  const location = useLocation();
  const pathnames = location.pathname.slice(1).split('/');

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
            hasPrecedingArrowIcon={false}
            hasPrecedingArrowIcon992px={false}
            key={pathname}
            scrollOffset={-(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT)}
            title={PATHNAME_TO_TITLE_MAPPING[pathname]}
            titleLink={`${pathname}`}
          />
        );
      })}
    </S.Container>
  );
};

export default Breadcrumb;
