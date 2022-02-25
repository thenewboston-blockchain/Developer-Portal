import styled from 'styled-components';

import colors from 'styles/colors';
import {b1, h3} from 'styles/fonts';

export const Container = styled.div`
  transition: 0.2s ease-in-out transform;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const CardTop = styled.div`
  height: 0;
  /* Formula is: (height / width * 100%) */
  padding-top: calc(360 / 640 * 100%);
  position: relative;
`;

export const Thumbnail = styled.img`
  height: auto;
  left: 0;
  max-width: 100%;
  position: absolute;
  top: 0;
`;

export const CardBottom = styled.div`
  padding: 12px 0px;
`;

export const Title = styled.h5`
  ${h3.semiBold}
  color: ${colors.palette.neutral['900']};
  line-height: 150%;
`;

export const Details = styled.span`
  ${b1.regular}
  color: ${colors.palette.neutral['500']};
  line-height: 150%;
`;
