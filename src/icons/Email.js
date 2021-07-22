import React from 'react';
import { withColor } from '../components/Icon';

const Email = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.432 6.461l7.567 5.297 7.567-5.297a.819.819 0 00-.71-.418H5.142c-.303 0-.57.17-.71.418zM19.67 8.585l-7.156 5.01a.9.9 0 01-1.032 0l-7.155-5.01v8.558a.82.82 0 00.814.814h13.714a.82.82 0 00.815-.814V8.585zM2.528 6.857a2.62 2.62 0 012.614-2.614h13.714a2.62 2.62 0 012.615 2.614v10.286a2.62 2.62 0 01-2.615 2.614H5.142a2.62 2.62 0 01-2.614-2.614V6.857z"
      ></path>
    </>
  );
};

Email.displayName = 'Email';
export default withColor(Email, { stroke: '#00112F', fillInColor: true });
