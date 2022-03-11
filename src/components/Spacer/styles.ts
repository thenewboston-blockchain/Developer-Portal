import styled, {css} from 'styled-components';

type Props = {
  size: number;
  xAxis?: boolean;
};

export const Spacer = styled.div<Props>`
  ${({xAxis, size}) =>
    xAxis
      ? css`
          width: ${size}px;
        `
      : css`
          height: ${size}px;
        `}
`;
