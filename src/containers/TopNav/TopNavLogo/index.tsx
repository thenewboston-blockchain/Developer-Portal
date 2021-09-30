import React, {FC} from 'react';

import TNBLogo from 'assets/images/TNB-Logo.png';
import * as S from './Styles';

const TopNavLogo: FC = () => (
  <S.Container to="/">
    <S.Logo alt="thenewboston Logo" className="TopNavLogo__img" src={TNBLogo} />
    <S.Text className="TopNavLogo__text">developer</S.Text>
  </S.Container>
);

export default TopNavLogo;
