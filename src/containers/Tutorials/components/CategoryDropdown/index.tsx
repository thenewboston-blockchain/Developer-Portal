import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Icon, IconType} from '@thenewboston/ui';

import {ROUTES} from 'constants/routes';
import {NavOption} from 'types/option';

import * as S from './styles';

type Props = {
  categories: NavOption[];
};

const CategoryDropdown = ({categories}: Props) => {
  const history = useHistory();
  const {category} = useParams<{category: string}>();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const navigateToCategory = (c: NavOption) => {
    setIsOpen(false);
    history.push(`${ROUTES.tutorials}/${c.pathname}`);
  };

  return (
    <S.Container>
      <S.SelectedOpWrapper onClick={() => setIsOpen(!isOpen)}>
        <S.SelectedOp>{category}</S.SelectedOp>
        <Icon icon={isOpen ? IconType.chevronUp : IconType.chevronDown} />
      </S.SelectedOpWrapper>
      <S.Options isOpen={isOpen}>
        {categories.map((c) =>
          c.title !== category ? (
            <S.Option key={c.title} onClick={() => navigateToCategory(c)}>
              {c.title}
            </S.Option>
          ) : null,
        )}
      </S.Options>
    </S.Container>
  );
};

export default CategoryDropdown;
