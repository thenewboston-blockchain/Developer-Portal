import React, {FC} from 'react';
import {useLocation, useHistory} from 'react-router';
import {IconType} from '@thenewboston/ui';

import {
  bankApiPath,
  confirmationValidatorApiPath,
  primaryValidatorApiPath,
  PATHNAME_TO_DROPDOWN_SELECTIONS,
} from '../../constants';

import * as S from './Styles';

const SideMenu: FC = () => {
  const {pathname} = useLocation();
  const history = useHistory();

  const isBankSelected = pathname.includes(bankApiPath);
  const isConfirmationValidatorSelected = pathname.includes(confirmationValidatorApiPath);
  const isPrimaryValidatorSelected = pathname.includes(primaryValidatorApiPath);
  return (
    <S.Container>
      <S.Section>
        <S.SectionHeader isActive={isBankSelected} onClick={() => history.push(bankApiPath)}>
          <div>Bank API</div>
          <S.Icon icon={isBankSelected ? IconType.chevronUp : IconType.chevronDown} size={20} totalSize={20} />
        </S.SectionHeader>
        {isBankSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS['bank-api'].map((selection) => {
            return (
              <S.Link isactive={pathname.includes(selection.url).toString()} key={selection.url} to={selection.url}>
                {selection.title}
              </S.Link>
            );
          })}
      </S.Section>

      <S.Section>
        <S.SectionHeader
          isActive={isConfirmationValidatorSelected}
          onClick={() => history.push(confirmationValidatorApiPath)}
        >
          <div>Confirmation Validator API</div>
          <S.Icon
            icon={isConfirmationValidatorSelected ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </S.SectionHeader>
        {isConfirmationValidatorSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS['confirmation-validator-api'].map((selection) => {
            return (
              <S.Link isactive={pathname.includes(selection.url).toString()} key={selection.url} to={selection.url}>
                {selection.title}
              </S.Link>
            );
          })}
      </S.Section>

      <S.Section>
        <S.SectionHeader isActive={isPrimaryValidatorSelected} onClick={() => history.push(primaryValidatorApiPath)}>
          <div>Primary Validator API</div>
          <S.Icon
            icon={isPrimaryValidatorSelected ? IconType.chevronUp : IconType.chevronDown}
            size={20}
            totalSize={20}
          />
        </S.SectionHeader>
        {isPrimaryValidatorSelected &&
          PATHNAME_TO_DROPDOWN_SELECTIONS['primary-validator-api'].map((selection) => {
            return (
              <S.Link isactive={pathname.includes(selection.url).toString()} key={selection.url} to={selection.url}>
                {selection.title}
              </S.Link>
            );
          })}
      </S.Section>
    </S.Container>
  );
};

export default SideMenu;
