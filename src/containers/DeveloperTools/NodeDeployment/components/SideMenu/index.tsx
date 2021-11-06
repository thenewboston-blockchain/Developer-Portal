import React, {FC} from 'react';
import {useLocation, useHistory} from 'react-router';
import {IconType} from '@thenewboston/ui';

import {NAVBAR_HEIGHT} from 'constants/offsets';
import {bankPath, validatorPath, PATHNAME_TO_DROPDOWN_SELECTIONS} from '../../constants';

import * as S from './Styles';

type Props = {
  breadcrumbHeight: number;
};

const SideMenu: FC<Props> = ({breadcrumbHeight}) => {
  const {pathname} = useLocation();
  const history = useHistory();

  const isBankSelected = pathname.includes(bankPath);
  const isValidatorSelected = pathname.includes(validatorPath);
  return (
    <S.Container>
      <S.Section>
        <S.SectionHeader isActive={isBankSelected} onClick={() => history.push(bankPath)}>
          <div>Bank</div>
          <S.Icon icon={isBankSelected ? IconType.chevronUp : IconType.chevronDown} size={20} totalSize={20} />
        </S.SectionHeader>
        {isBankSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS.bank.map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <S.Link
                activeClass="LivingWhitepaperSideMenu__link--active"
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + breadcrumbHeight)}
                to={selectionHash}
              >
                {selection.title}
              </S.Link>
            );
          })}
      </S.Section>

      <S.Section>
        <S.SectionHeader isActive={isValidatorSelected} onClick={() => history.push(validatorPath)}>
          <div>Validator</div>
          <S.Icon icon={isValidatorSelected ? IconType.chevronUp : IconType.chevronDown} size={20} totalSize={20} />
        </S.SectionHeader>
        {isValidatorSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS.validator.map((selection) => {
            const selectionHash = selection.url.slice(selection.url.indexOf('#') + 1);
            return (
              <S.Link
                activeClass="LivingWhitepaperSideMenu__link--active"
                key={selection.url}
                offset={-(NAVBAR_HEIGHT + breadcrumbHeight)}
                to={selectionHash}
              >
                {selection.title}
              </S.Link>
            );
          })}
      </S.Section>
    </S.Container>
  );
};

export default SideMenu;
