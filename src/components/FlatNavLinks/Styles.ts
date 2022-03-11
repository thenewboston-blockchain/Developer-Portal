import styled, {css} from 'styled-components';

import colors from 'styles/colors';
import {h3} from 'styles/fonts';

export const Container = styled.div`
  margin-top: 30px;
  padding: 1px;

  @media (max-width: 992px) {
    margin-top: 16px;
  }
`;

export const OptionButton = styled.button<{isActive?: boolean}>`
  ${h3.regular}
  align-items: center;
  background: transparent;
  border: none;
  color: ${colors.palette.gray['600']};
  cursor: pointer;
  display: flex;
  height: 40px;
  line-height: 1.5;
  margin-bottom: 4px;
  transition: background-color 0.1s;

  &:hover {
    color: ${colors.palette.blue['800']};
  }

  ${(props) =>
    props.isActive &&
    css`
      ${h3.bold}
      border-bottom: 2px solid ${colors.quaternary};
      color: ${colors.palette.blue['800']};
    `}
`;
