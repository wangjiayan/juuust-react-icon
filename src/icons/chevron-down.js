import React from 'react';
import { withColor } from '../components/Icon';

const ChevronDown = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.363 7.863a.9.9 0 011.273 0L12 14.227l6.363-6.364a.9.9 0 011.273 1.273l-7 7a.9.9 0 01-1.273 0l-7-7a.9.9 0 010-1.273z"
      ></path>
    </>
  );
};

ChevronDown.displayName = 'ChevronDown';
export default withColor(ChevronDown, { stroke: '#00112F', fillInColor: true });
