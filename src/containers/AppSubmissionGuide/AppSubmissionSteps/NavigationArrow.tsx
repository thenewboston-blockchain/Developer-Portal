import React, {FC} from 'react';

const NavigationArrow: FC<React.HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5.64706 0L0 0L10.3529 9.6L0 19.2H5.64706L16 9.6L5.64706 0Z" fill="currentColor" />
    </svg>
  );
};

export default NavigationArrow;
