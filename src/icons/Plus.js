import React from 'react';
import { withColor } from '../components/Icon';

const Plus = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.243a.9.9 0 01.9.9V11.1h5.957a.9.9 0 010 1.8H12.9v5.957a.9.9 0 01-1.8 0V12.9H5.143a.9.9 0 110-1.8H11.1V5.143a.9.9 0 01.9-.9z"
      ></path>
    </>
  );
};

Plus.displayName = 'Plus';
export default withColor(Plus, { stroke: '#00112F', fillInColor: true });
