import React from 'react';
import { withColor } from '../components/Icon';

const LogOut = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5.186A.814.814 0 005.186 6v12a.814.814 0 00.814.815H9.43a.9.9 0 110 1.8H6A2.614 2.614 0 013.386 18V6A2.614 2.614 0 016 3.386H9.43a.9.9 0 010 1.8H6zm8.793 1.892a.9.9 0 011.272 0l4.286 4.286a.9.9 0 010 1.273l-4.286 4.285a.9.9 0 11-1.272-1.272l2.749-2.75H9.429a.9.9 0 110-1.8h8.113l-2.75-2.749a.9.9 0 010-1.273z"
      ></path>
    </>
  );
};

LogOut.displayName = 'LogOut';
export default withColor(LogOut, { stroke: '#00112F', fillInColor: true });
