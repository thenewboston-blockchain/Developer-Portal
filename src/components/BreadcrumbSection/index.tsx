import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {Icon, IconType} from '@thenewboston/ui';

import {Popover, ReactScrollLink} from 'components';
import {useWindowDimensions} from 'hooks';

import './BreadcrumbSection.scss';

type Props = {
  titleLink: string;
  title: string;
  isSectionSelected: boolean;
  disabled?: boolean;
  hasItems: boolean;
  shouldShowDropdownByDefault?: boolean; // to override dropdown being shown in mobile widths only
  items?: {
    url: string;
    title: string;
  }[];
  isItemsInSamePage?: boolean;
  hasPrecedingArrowIcon?: boolean;
  hasPrecedingArrowIcon992px?: boolean;
  scrollOffset?: number; // only used if items are in the same page
  popoverOffsetX414?: number;
};

const BreadcrumbSection: FC<Props> = ({
  disabled = false,
  hasItems,
  hasPrecedingArrowIcon = false,
  hasPrecedingArrowIcon992px = false,
  isItemsInSamePage,
  isSectionSelected,
  items,
  scrollOffset,
  shouldShowDropdownByDefault = false,
  popoverOffsetX414 = 50,
  title,
  titleLink,
}) => {
  const {width} = useWindowDimensions();

  const [dropDownEl, setDropDownEl] = useState<HTMLButtonElement | null>(null);

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e) return;

    if (dropDownEl) {
      setDropDownEl(null);
    } else {
      setDropDownEl(e.currentTarget);
    }
  };

  return (
    <>
      {/* Only show breadcrumb without dropdown if width > 992 */}
      {width > 992 && !shouldShowDropdownByDefault ? (
        <div className="BreadcrumbSection__link-container">
          {hasPrecedingArrowIcon && (
            <Icon className="BreadcrumbSection__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
          )}
          {disabled ? (
            <div className={clsx('BreadcrumbSection__link', 'BreadcrumbSection__link--disabled')}>{title}</div>
          ) : (
            <Link
              className={clsx('BreadcrumbSection__link', isSectionSelected && 'BreadcrumbSection__link--active')}
              to={titleLink}
            >
              {title}
            </Link>
          )}
        </div>
      ) : (
        <>
          {hasPrecedingArrowIcon992px && (
            <Icon className="BreadcrumbSection__icon" icon={IconType.chevronRight} size={16} totalSize={16} />
          )}
          <button className="BreadcrumbSection__button" onClick={toggleDropdown} disabled={disabled}>
            <span
              className={clsx(
                'BreadcrumbSection__link',
                isSectionSelected && 'BreadcrumbSection__link--active',
                disabled && 'BreadcrumbSection__link--disabled',
              )}
            >
              {title}
            </span>
            {hasItems && (
              <Icon
                className="BreadcrumbSection__icon"
                id={titleLink}
                icon={dropDownEl ? IconType.chevronUp : IconType.chevronDown}
                size={16}
                totalSize={16}
              />
            )}
          </button>
          <Popover
            anchorEl={dropDownEl}
            anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
            className="BreadcrumbSection__Popover"
            closePopover={() => setDropDownEl(null)}
            id="whitepaper"
            open={!!dropDownEl}
            transformOrigin={{horizontal: 'center', vertical: 'top'}}
            transformOffset={{horizontal: width > 414 ? 0 : popoverOffsetX414, vertical: 12}}
          >
            {items &&
              items.map((item) => {
                if (isItemsInSamePage) {
                  const selectionHash = item.url.slice(item.url.indexOf('#') + 1);
                  return (
                    <ReactScrollLink
                      activeClass="BreadcrumbSection__link--active"
                      className="BreadcrumbSection__Popover-link"
                      key={item.url}
                      offset={scrollOffset || 0}
                      to={selectionHash}
                    >
                      {item.title}
                    </ReactScrollLink>
                  );
                }
                return (
                  <Link className="BreadcrumbSection__Popover-link" key={item.url} to={item.url}>
                    {item.title}
                  </Link>
                );
              })}
          </Popover>
        </>
      )}
    </>
  );
};

export default BreadcrumbSection;
