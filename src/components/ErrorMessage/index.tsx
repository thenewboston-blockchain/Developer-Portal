import React from 'react';

import * as S from './styles';

type Props = {
  message?: string;
};

const ErrorMessage = ({message}: Props) => {
  return <S.ErrorMessage>{message || 'Something went wrong!'}</S.ErrorMessage>;
};

export default ErrorMessage;
