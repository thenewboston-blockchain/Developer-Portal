import React from 'react';
import {useHistory} from 'react-router-dom';

import {ROUTES} from 'constants/routes';
import {useWindowDimensions} from 'hooks';
import breakpoints from 'styles/breakpoints';
import {Playlist} from 'types/tutorials';

import SliderArrowLeft from 'assets/svgs/slider-arrow-left.svg';
import SliderArrowRight from 'assets/svgs/slider-arrow-right.svg';

import * as S from './styles';

const SLIDER_HORIZONTAL_PADDING = {
  lg: 80,
  md: 48,
  sm: 48,
  xs: 24,
};
const SLIDER_ITEM_HEIGHT = {
  lg: 192,
  md: 148,
  sm: 148,
  xs: 88,
};
const SLIDER_ITEM_WIDTH = {
  lg: 336,
  md: 264,
  sm: 264,
  xs: 160,
};
const SLIDER_ITEM_MARGIN_RIGHT = 16;

type Props = {
  playlists: Playlist[];
};

const RelatedTutorials = ({playlists}: Props) => {
  const history = useHistory();
  const {width} = useWindowDimensions();

  const sliderRef = React.useRef<HTMLDivElement>();
  const [scrollableWidth, setScrollableWidth] = React.useState<number>(0);
  const [totalSlides, setTotalSlides] = React.useState(1);
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const isNotSmallScreen = width > parseInt(breakpoints.small, 10);

  const sliderItemWidth = React.useMemo(() => {
    if (width > parseInt(breakpoints.large, 10)) return SLIDER_ITEM_WIDTH.lg;
    if (width > parseInt(breakpoints.medium, 10)) return SLIDER_ITEM_WIDTH.md;
    if (width > parseInt(breakpoints.small, 10)) return SLIDER_ITEM_WIDTH.sm;
    return SLIDER_ITEM_WIDTH.xs;
  }, [width]);

  const sliderItemHeight = React.useMemo(() => {
    if (width > parseInt(breakpoints.large, 10)) return SLIDER_ITEM_HEIGHT.lg;
    if (width > parseInt(breakpoints.medium, 10)) return SLIDER_ITEM_HEIGHT.md;
    if (width > parseInt(breakpoints.small, 10)) return SLIDER_ITEM_HEIGHT.sm;
    return SLIDER_ITEM_HEIGHT.xs;
  }, [width]);

  const paddingHorizontal = React.useMemo(() => {
    if (width > parseInt(breakpoints.large, 10)) return SLIDER_HORIZONTAL_PADDING.lg;
    if (width > parseInt(breakpoints.medium, 10)) return SLIDER_HORIZONTAL_PADDING.md;
    if (width > parseInt(breakpoints.small, 10)) return SLIDER_HORIZONTAL_PADDING.sm;
    return SLIDER_HORIZONTAL_PADDING.xs;
  }, [width]);

  const handleScroll = React.useCallback(
    (scroll: number) => {
      if (sliderRef.current && scrollableWidth) {
        sliderRef.current.scrollBy({behavior: 'smooth', left: scroll});
        setCurrentSlide(scroll < 0 ? currentSlide - 1 : currentSlide + 1);
      }
    },
    [scrollableWidth, setCurrentSlide, currentSlide],
  );

  React.useEffect(() => {
    setScrollableWidth(sliderRef.current?.clientWidth ?? 0);

    const scrollAreaWidth = width - paddingHorizontal * 2;
    const calculatedSlides =
      (playlists.length * sliderItemWidth + SLIDER_ITEM_MARGIN_RIGHT * (playlists.length - 1)) / scrollAreaWidth;

    setTotalSlides(Math.ceil(calculatedSlides));
  }, [setScrollableWidth, width, setTotalSlides, sliderItemWidth, paddingHorizontal, playlists]);

  const renderSlider = () => {
    return (
      <S.Slider
        ref={(ref) => {
          sliderRef.current = ref!;
        }}
        paddingHorizontal={paddingHorizontal}
      >
        {isNotSmallScreen && currentSlide !== 1 && (
          <S.SliderControl position="left" height={sliderItemHeight}>
            <S.SliderControlImg alt="Arrow Left" src={SliderArrowLeft} onClick={() => handleScroll(-scrollableWidth)} />
          </S.SliderControl>
        )}
        {playlists.map((item) => (
          <S.SliderItem
            key={item.pk}
            title={item.title}
            role="button"
            tabIndex={0}
            onClick={() => history.push(`${ROUTES.tutorials}/${item.categories[0]}/${item.pk}`)}
            marginRight={SLIDER_ITEM_MARGIN_RIGHT}
            width={sliderItemWidth}
            height={sliderItemHeight}
          >
            <S.SliderThumbnail alt={item.title} src={item.thumbnail} />
          </S.SliderItem>
        ))}
        {isNotSmallScreen && currentSlide !== totalSlides && (
          <S.SliderControl position="right" height={sliderItemHeight}>
            <S.SliderControlImg
              alt="Arrow Right"
              src={SliderArrowRight}
              onClick={() => handleScroll(scrollableWidth)}
            />
          </S.SliderControl>
        )}
      </S.Slider>
    );
  };

  if (!playlists?.length) return null;

  return (
    <S.Container>
      <S.Heading>Related Tutorials</S.Heading>
      {renderSlider()}
    </S.Container>
  );
};

export default RelatedTutorials;
