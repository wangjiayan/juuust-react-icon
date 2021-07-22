import React from 'react';
import { withColor } from '../components/Icon';

const Min = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.243 12a.9.9 0 01.9-.9h13.714a.9.9 0 010 1.8H5.143a.9.9 0 01-.9-.9z"
      ></path>
    </>
  );
};

Min.displayName = 'Min';
export default withColor(Min, { stroke: '#00112F', fillInColor: true });
