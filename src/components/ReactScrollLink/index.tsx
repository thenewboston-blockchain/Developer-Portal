import React, {ReactNode} from 'react';
import {Link, LinkProps} from 'react-scroll';

import {BREADCRUMB_HEIGHT, NAVBAR_HEIGHT} from 'constants/offsets';

type Props = LinkProps & {
  children: ReactNode;
};

const OFFSET = -(NAVBAR_HEIGHT + BREADCRUMB_HEIGHT);

const ReactScrollLink = ({
  activeClass,
  children,
  className,
  duration = 350,
  hashSpy = true,
  ignoreCancelEvents = true,
  offset = OFFSET,
  smooth = true,
  spy = true,
  to,
}: Props) => (
  <Link
    activeClass={activeClass}
    className={className}
    duration={duration}
    hashSpy={hashSpy}
    ignoreCancelEvents={ignoreCancelEvents}
    offset={offset}
    smooth={smooth}
    spy={spy}
    to={to}
  >
    {children}
  </Link>
);

export default ReactScrollLink;
