import React, {FC, ReactNode, useEffect, useMemo, useState} from 'react';
import Measure from 'react-measure';
import {useLocation} from 'react-router';
import {scroller} from 'react-scroll';

import {Container, Divider, PageTitle} from 'components';
import {NAVBAR_HEIGHT} from 'constants/offsets';
import {useWindowDimensions} from 'hooks';

import Breadcrumb from '../Breadcrumb';
import SideMenu from '../SideMenu';

import './DeveloperPortalLayout.scss';

type Props = {
  children?: ReactNode;
  pageName: string;
  approvedProjectUrls?: {
    title: string;
    url: string;
  }[];
  projectName?: string;
};

const TIMEOUT_DELAY = 200;
const PROJECT_DETAILS_HEADER_HEIGHT = 180;
const SECTION_PADDING = 48;

const DeveloperPortalLayout: FC<Props> = ({children, pageName, projectName}) => {
  const [breadcrumbHeight, setBreadcrumbHeight] = useState(56);
  const {hash} = useLocation();

  const {width} = useWindowDimensions();

  const TOTAL_OFFSET = useMemo(() => {
    const baseOffset = NAVBAR_HEIGHT + breadcrumbHeight + SECTION_PADDING;
    if (width < 786) {
      return baseOffset;
    }
    return baseOffset + PROJECT_DETAILS_HEADER_HEIGHT;
  }, [breadcrumbHeight, width]);

  useEffect(() => {
    // hack: scroll to the correct position based on hash when page reloads
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash.slice(1), {
          ignoreCancelEvents: true,
          offset: -TOTAL_OFFSET,
        });
      }, TIMEOUT_DELAY);
    }
    // eslint-disable-next-line
  }, [TOTAL_OFFSET]);
  return (
    <>
      <PageTitle title={pageName} />
      <Measure bounds onResize={(contentRect) => setBreadcrumbHeight(contentRect?.bounds?.height || 0)}>
        {({measureRef}) => (
          <div className="ProjectsDeveloperPortalLayout__breadcrumb" ref={measureRef}>
            <Container>
              <Breadcrumb breadcrumbHeight={breadcrumbHeight} projectName={projectName} />
            </Container>
            <Divider />
          </div>
        )}
      </Measure>
      <Container>
        <div className="ProjectsDeveloperPortalLayout__main-content">
          <div className="ProjectsDeveloperPortalLayout__left-content">
            <SideMenu breadcrumbHeight={breadcrumbHeight} />
          </div>
          <div className="ProjectsDeveloperPortalLayout__right-content">{children}</div>
        </div>
      </Container>
    </>
  );
};

export default DeveloperPortalLayout;
