import styled from 'styled-components';
import colors from 'styles/colors';
import {h3} from 'styles/fonts';

type OptionsProps = {
  isOpen: boolean;
};

export const Container = styled.div`
  display: none;
  margin-bottom: 64px;

  @media (max-width: 1366px) {
    display: block;
  }
`;

export const SelectedOpWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 992px) {
    justify-content: space-between;
  }
`;

export const SelectedOp = styled.button`
  ${h3.bold}
  align-items: center;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${colors.quaternary};
  color: ${colors.palette.gray['800']};
  cursor: pointer;
  display: flex;
  height: 40px;
  line-height: 1.5;
  margin-bottom: 4px;
  margin-right: 16px;
`;

export const Options = styled.div<OptionsProps>`
  height: ${(props) => (props.isOpen ? 'auto' : '0px')};
  overflow: hidden;
`;

export const Option = styled.button`
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

  &:hover {
    color: ${colors.palette.gray['800']};
  }
`;
