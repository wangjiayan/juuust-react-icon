import React from 'react';
import { withColor } from '../components/Icon';

const ChevronLeft = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.136 4.364a.9.9 0 010 1.272L9.773 12l6.363 6.364a.9.9 0 11-1.272 1.272l-7-7a.9.9 0 010-1.272l7-7a.9.9 0 011.272 0z"
      ></path>
    </>
  );
};

ChevronLeft.displayName = 'ChevronLeft';
export default withColor(ChevronLeft, { stroke: '#00112F', fillInColor: true });
