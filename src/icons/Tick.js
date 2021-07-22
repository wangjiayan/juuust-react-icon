import React from 'react';
import { withColor } from '../components/Icon';

const Tick = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.493 6.221a.9.9 0 010 1.273l-9.428 9.428a.9.9 0 01-1.273 0l-4.286-4.285a.9.9 0 011.273-1.273l3.65 3.65L18.22 6.22a.9.9 0 011.272 0z"
      ></path>
    </>
  );
};

Tick.displayName = 'Tick';
export default withColor(Tick, { stroke: '#00112F', fillInColor: true });
