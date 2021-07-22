import React from 'react';
import { withColor } from '../components/Icon';

const Search = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.142 5.186a5.957 5.957 0 104.13 10.25.913.913 0 01.163-.162 5.957 5.957 0 00-4.292-10.088zm6.085 10.77a7.757 7.757 0 10-1.273 1.273l3.123 3.122a.9.9 0 101.273-1.273l-3.123-3.123z"
      ></path>
    </>
  );
};

Search.displayName = 'Search';
export default withColor(Search, { stroke: '#00112F', fillInColor: true });
