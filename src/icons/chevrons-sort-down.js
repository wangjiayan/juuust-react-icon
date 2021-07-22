import React from 'react';
import { withColor } from '../components/Icon';

const ChevronsSortDown = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.078 13.935a.9.9 0 011.273 0L12 17.585l3.65-3.65a.9.9 0 011.272 1.273l-4.286 4.286a.9.9 0 01-1.272 0l-4.286-4.286a.9.9 0 010-1.273z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.243a.9.9 0 01.636.263l4.286 4.286a.9.9 0 11-1.273 1.273L12 6.415l-3.65 3.65a.9.9 0 01-1.272-1.273l4.286-4.286A.9.9 0 0112 4.243z"
      ></path>
    </>
  );
};

ChevronsSortDown.displayName = 'ChevronsSortDown';
export default withColor(ChevronsSortDown, {
  stroke: '#00112F',
  fillInColor: true
});
