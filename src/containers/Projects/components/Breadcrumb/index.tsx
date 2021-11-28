import React, {FC} from 'react';
import clsx from 'clsx';

import {NAVBAR_HEIGHT} from 'constants/offsets';
import {useLocation} from 'react-router';
import {PATHNAME_TO_DROPDOWN_SELECTIONS, PATHNAME_TO_TITLE_MAPPING} from '../../constants';
import BreadcrumbSection from '../../../../components/BreadcrumbSection';

import './Breadcrumb.scss';

type Props = {
  className?: string;
  breadcrumbHeight: number;
  projectName?: string;
};

const TOP_LINK_HEIGHT = 72;

const Breadcrumb: FC<Props> = ({breadcrumbHeight, className}) => {
  const location = useLocation();
  const pathnames = location.pathname.slice(1).split('/');

  return (
    <div className={clsx('Breadcrumb', className)}>
      {/* Developer */}
      <BreadcrumbSection
        isSectionSelected={pathnames.length === 0}
        hasItems={false}
        hasPrecedingArrowIcon={false}
        key="developer"
        title={PATHNAME_TO_TITLE_MAPPING.developer}
        titleLink="/"
      />
      {pathnames.map((pathname, index) => {
        const isLastIndex = index === pathnames.length - 1;
        // projects
        if (index === 0) {
          return (
            <BreadcrumbSection
              isSectionSelected={isLastIndex}
              hasItems={false}
              hasPrecedingArrowIcon
              hasPrecedingArrowIcon992px
              key={pathname}
              title={PATHNAME_TO_TITLE_MAPPING[pathname]}
              titleLink={`/${pathname}`}
            />
          );
        }

        // rules
        if (index === 1) {
          return (
            <BreadcrumbSection
              isItemsInSamePage
              isSectionSelected={isLastIndex}
              items={PATHNAME_TO_DROPDOWN_SELECTIONS[pathname]}
              hasItems
              hasPrecedingArrowIcon
              hasPrecedingArrowIcon992px
              key={pathname}
              scrollOffset={-(NAVBAR_HEIGHT + TOP_LINK_HEIGHT + breadcrumbHeight)}
              title={PATHNAME_TO_TITLE_MAPPING[pathname]}
              titleLink={`/projects/${pathname}`}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default Breadcrumb;
