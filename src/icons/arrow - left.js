import React from 'react';
import { withColor } from '../components/Icon';

const ArrowLeft = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.636 5.364a.9.9 0 010 1.272L8.173 11.1H18a.9.9 0 010 1.8H8.173l4.463 4.464a.9.9 0 11-1.272 1.272l-6-6a.9.9 0 010-1.272l6-6a.9.9 0 011.272 0z"
      ></path>
    </>
  );
};

ArrowLeft.displayName = 'ArrowLeft';
export default withColor(ArrowLeft, { stroke: '#00112F', fillInColor: true });
