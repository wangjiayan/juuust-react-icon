import React from 'react';
import { withColor } from '../components/Icon';

const ChevronLeftOver = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.972 5.637A.9.9 0 1016.7 4.364l-7 7a.9.9 0 000 1.273l7 7a.9.9 0 101.273-1.273L11.608 12l6.364-6.363zM7.564 5.9a.9.9 0 10-1.8 0v12.2a.9.9 0 001.8 0V5.9z"
      ></path>
    </>
  );
};

ChevronLeftOver.displayName = 'ChevronLeftOver';
export default withColor(ChevronLeftOver, {
  stroke: '#00112F',
  fillInColor: true
});
