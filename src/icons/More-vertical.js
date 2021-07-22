import React from 'react';
import { withColor } from '../components/Icon';

const MoreVertical = () => {
  return (
    <>
      <path d="M11.143 12a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"></path>
      <path d="M11.143 18a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"></path>
      <path d="M11.143 6a.857.857 0 101.714 0 .857.857 0 00-1.714 0z"></path>
      <path d="M11.143 12a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"></path>
      <path d="M11.143 18a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"></path>
      <path d="M11.143 6a.857.857 0 101.714 0 .857.857 0 00-1.714 0z"></path>
    </>
  );
};

MoreVertical.displayName = 'MoreVertical';
export default withColor(MoreVertical, {
  stroke: '#00112F',
  fillInColor: true
});
