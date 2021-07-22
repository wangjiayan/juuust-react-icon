import React from 'react';
import { withColor } from '../components/Icon';

const MoreHorizontal = () => {
  return (
    <>
      <path d="M6 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"></path>
      <path d="M12 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"></path>
      <path d="M18 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"></path>
    </>
  );
};

MoreHorizontal.displayName = 'MoreHorizontal';
export default withColor(MoreHorizontal, {
  stroke: '#00112F',
  fillInColor: true
});
