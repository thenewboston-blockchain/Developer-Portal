import React, {FC} from 'react';
import clsx from 'clsx';

import {NAVBAR_HEIGHT} from 'constants/offsets';
import {useLocation} from 'react-router';
import {useWindowDimensions} from 'hooks';
import {PATHNAME_TO_DROPDOWN_SELECTIONS, PATHNAME_TO_TITLE_MAPPING} from '../../constants';
import BreadcrumbSection from '../../../../components/BreadcrumbSection';
import {orderedProjectDetailsTopic} from '../../containers/ProjectDetails/constants';

import './Breadcrumb.scss';

type Props = {
  className?: string;
  breadcrumbHeight: number;
  approvedProjectUrls?: {
    title: string;
    url: string;
  }[];
  projectName?: string;
};

const TOP_LINK_HEIGHT = 72;
const PROJECT_DETAILS_HEADER_HEIGHT = 180;
const PROJECT_DETAILS_HEADER_HEIGHT_768 = 260;

const Breadcrumb: FC<Props> = ({approvedProjectUrls, breadcrumbHeight, className, projectName}) => {
  const location = useLocation();
  const {width} = useWindowDimensions();
  const pathnames = location.pathname.slice(1).split('/');
  const projectDetailsHeaderHeight = width > 768 ? PROJECT_DETAILS_HEADER_HEIGHT : PROJECT_DETAILS_HEADER_HEIGHT_768;

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
              isItemsInSamePage={false}
              isSectionSelected={isLastIndex}
              items={PATHNAME_TO_DROPDOWN_SELECTIONS[pathname]}
              hasItems
              hasPrecedingArrowIcon
              hasPrecedingArrowIcon992px
              key={pathname}
              title={PATHNAME_TO_TITLE_MAPPING[pathname]}
              titleLink={`/${pathname}`}
            />
          );
        }

        // rules or approved projects
        if (index === 1) {
          if (pathname === 'approved-projects') {
            return (
              <BreadcrumbSection
                isItemsInSamePage={false}
                isSectionSelected={isLastIndex}
                items={approvedProjectUrls}
                hasItems
                hasPrecedingArrowIcon
                key={pathname}
                title={PATHNAME_TO_TITLE_MAPPING[pathname]}
                titleLink={`/projects/${pathname}`}
              />
            );
          }
          return (
            <BreadcrumbSection
              isItemsInSamePage
              isSectionSelected={isLastIndex}
              items={PATHNAME_TO_DROPDOWN_SELECTIONS[pathname]}
              hasItems
              hasPrecedingArrowIcon
              key={pathname}
              scrollOffset={-(NAVBAR_HEIGHT + TOP_LINK_HEIGHT + breadcrumbHeight)}
              title={PATHNAME_TO_TITLE_MAPPING[pathname]}
              titleLink={`/projects/${pathname}`}
            />
          );
        }

        // individual project details
        return projectName ? (
          <BreadcrumbSection
            isItemsInSamePage
            isSectionSelected={isLastIndex}
            items={orderedProjectDetailsTopic.map((topic) => {
              return {
                title: topic.title,
                url: `/projects/${pathname}#${topic.anchor}`,
              };
            })}
            hasItems
            hasPrecedingArrowIcon
            key={pathname}
            scrollOffset={-(NAVBAR_HEIGHT + TOP_LINK_HEIGHT + breadcrumbHeight + projectDetailsHeaderHeight)}
            title={projectName}
            titleLink={`/projects/${pathname}`}
          />
        ) : null;
      })}
    </div>
  );
};

export default Breadcrumb;
