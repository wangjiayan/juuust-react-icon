import React from 'react';
import { withColor } from '../components/Icon';

const ChevronRightOver = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.027 18.364A.9.9 0 107.3 19.637l7-7a.9.9 0 000-1.273l-7-7a.9.9 0 00-1.273 1.273l6.364 6.364-6.364 6.363zm10.408-.264a.9.9 0 101.8 0V5.9a.9.9 0 10-1.8 0v12.2z"
      ></path>
    </>
  );
};

ChevronRightOver.displayName = 'ChevronRightOver';
export default withColor(ChevronRightOver, {
  stroke: '#00112F',
  fillInColor: true
});
