import styled from 'styled-components';
import {A} from 'components';

import colors from 'styles/colors';
import {h1, h3} from 'styles/fonts';

const sliderControlOffset = 16;

type SliderProps = {
  paddingHorizontal: number;
};

type SliderItemProps = {
  height: number;
  marginRight: number;
  width: number;
};

type SliderControlProps = {
  position: 'left' | 'right';
  height: number;
};

export const Container = styled.div`
  position: relative;
  text-align: center;

  @media (max-width: 1366px) {
    text-align: left;
  }
`;

export const Heading = styled.h2`
  ${h1.semiBold}
  color: ${colors.palette.neutral['800']};
  margin-bottom: 32px;

  @media (max-width: 1366px) {
    padding: 0 48px;
  }

  @media (max-width: 992px) {
    margin-bottom: 24px;
  }

  @media (max-width: 786px) {
    padding: 0 24px;
    margin-bottom: 16px;
  }
`;

export const Paragraph = styled.h2`
  ${h3.regular}
  color: ${colors.palette.neutral['600']};
  line-height: 150%;
  margin-bottom: 48px;
  margin-top: 16px;
  max-width: 670px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Link = styled(A)`
  ${h3.medium}
  color: ${colors.quaternary};
`;

export const Slider = styled.div<SliderProps>`
  display: flex;
  overflow: hidden;
  padding: 16px ${({paddingHorizontal}) => paddingHorizontal}px;
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

export const SliderItem = styled.div<SliderItemProps>`
  cursor: pointer;
  filter: drop-shadow(0 4px 6px rgba(26, 41, 54, 0.5));
  height: ${({height}) => height}px;
  min-width: ${({width}) => width}px;
  transition: transform 0.3s ease;
  &:not(:last-child) {
    margin-right: ${({marginRight}) => marginRight}px;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

export const SliderThumbnail = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const SliderControl = styled.div<SliderControlProps>`
  align-items: center;
  background: rgba(234, 242, 248, 0.9);
  display: flex;
  height: ${({height}) => height + sliderControlOffset * 2}px;
  justify-content: center;
  position: absolute;
  transform: translateY(-${sliderControlOffset}px);
  width: 80px;
  z-index: 1;
  ${({position}) => (position === 'left' ? 'left: 0' : 'right: 0')}
`;

export const SliderControlImg = styled.img`
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.05);
  }
`;
