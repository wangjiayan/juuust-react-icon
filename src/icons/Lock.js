import React from 'react';
import { withColor } from '../components/Icon';

const Lock = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.329a3.386 3.386 0 00-3.386 3.385v2.529h6.771V7.714A3.386 3.386 0 0012 4.33zm5.185 5.914V7.714a5.186 5.186 0 00-10.371 0v2.529h-.815a2.614 2.614 0 00-2.614 2.614v6A2.614 2.614 0 006 21.472h12a2.614 2.614 0 002.615-2.615v-6a2.614 2.614 0 00-2.615-2.614h-.814zM6 12.043a.814.814 0 00-.814.814v6c0 .45.365.815.814.815h12c.45 0 .815-.365.815-.815v-6a.814.814 0 00-.815-.814H6z"
      ></path>
    </>
  );
};

Lock.displayName = 'Lock';
export default withColor(Lock, { stroke: '#00112F', fillInColor: true });
