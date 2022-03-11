import React from 'react';

import * as S from './styles';

type Props = {
  size: number;
  xAxis?: boolean;
};

const Spacer = ({size, xAxis}: Props) => {
  return <S.Spacer size={size} xAxis={xAxis} />;
};

export default Spacer;
