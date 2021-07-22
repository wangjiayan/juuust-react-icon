import React from 'react';
import { withColor } from '../components/Icon';

const Copy = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.142 4.329a.814.814 0 00-.814.814v7.714a.814.814 0 00.814.815h.857a.9.9 0 110 1.8h-.857a2.615 2.615 0 01-2.614-2.615V5.143a2.614 2.614 0 012.614-2.614h7.714a2.614 2.614 0 012.615 2.614V6a.9.9 0 01-1.8 0v-.857a.814.814 0 00-.815-.814H5.142zm6 6a.814.814 0 00-.814.814v7.714c0 .45.364.815.814.815h7.714c.45 0 .815-.365.815-.815v-7.714a.814.814 0 00-.815-.814h-7.714zm-2.614.814a2.614 2.614 0 012.614-2.614h7.714a2.614 2.614 0 012.615 2.614v7.714a2.614 2.614 0 01-2.615 2.615h-7.714a2.614 2.614 0 01-2.614-2.615v-7.714z"
      ></path>
    </>
  );
};

Copy.displayName = 'Copy';
export default withColor(Copy, { stroke: '#00112F', fillInColor: true });
