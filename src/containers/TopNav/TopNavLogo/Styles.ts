import styled from 'styled-components';

import {h2} from 'styles/fonts';
import colors from 'styles/colors';

import {NavLink} from 'react-router-dom';

export const Container = styled(NavLink)`
  align-items: center;
  background-color: transparent;
  border-right: none;
  display: flex;
  padding: 8px 0;
`;

export const Logo = styled.img`
  height: 30px;
  margin-right: 8px;
`;

export const Text = styled.div`
  ${h2.medium};
  color: ${colors.palette.neutral['900']};
`;
