import React from 'react';
import { withColor } from '../components/Icon';

const ChevronUp = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.636 16.136a.9.9 0 01-1.272 0L12 9.773l-6.364 6.363a.9.9 0 11-1.272-1.272l7-7a.9.9 0 011.272 0l7 7a.9.9 0 010 1.272z"
      ></path>
    </>
  );
};

ChevronUp.displayName = 'ChevronUp';
export default withColor(ChevronUp, { stroke: '#00112F', fillInColor: true });
