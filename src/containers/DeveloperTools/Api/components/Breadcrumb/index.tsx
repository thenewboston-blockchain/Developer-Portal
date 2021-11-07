import React from 'react';
import {useLocation} from 'react-router';

import {BreadcrumbSection} from 'components';
import {BREADCRUMB_HEIGHT, NAVBAR_HEIGHT} from 'constants/offsets';
import {SFC} from 'types/generic';

import {PATHNAME_TO_TITLE_MAPPING, TOOLS_DROPDOWN_SELECTIONS} from '../../../constants';
import {API_ITEMS, API_PATHNAME_TO_TITLE_MAPPING, PATHNAME_TO_DROPDOWN_SELECTIONS} from '../../constants';

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
      {pathnames.map((pathname, index) => {
        if (index === 0) {
          return (
            <BreadcrumbSection
              isItemsInSamePage={false}
              isSectionSelected={false}
              items={API_ITEMS}
              hasItems
              key={pathname}
              scrollOffset={-(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT)}
              title={PATHNAME_TO_TITLE_MAPPING[pathname]}
              titleLink={`${pathname}`}
            />
          );
        }

        if (index === 1) {
          return (
            <BreadcrumbSection
              isSectionSelected
              items={PATHNAME_TO_DROPDOWN_SELECTIONS[pathname]}
              hasItems
              hasPrecedingArrowIcon
              key={pathname}
              scrollOffset={-(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT)}
              title={API_PATHNAME_TO_TITLE_MAPPING[pathname]}
              titleLink={`${pathname}`}
            />
          );
        }

        return null;
      })}
    </S.Container>
  );
};

export default Breadcrumb;
