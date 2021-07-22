import React from 'react';
import { withColor } from '../components/Icon';

const AlertTriangle = () => {
  return (
    <>
      <path d="M12.9 9.823a.9.9 0 00-1.8 0v2.628a.9.9 0 101.8 0V9.823z"></path>
      <path d="M12 17.248a1.248 1.248 0 100-2.496 1.248 1.248 0 000 2.496z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.297a2.614 2.614 0 00-2.235 1.258l-.003.005-7.26 12.12-.007.012a2.614 2.614 0 002.235 3.921h14.54a2.615 2.615 0 002.235-3.921l-.007-.012-7.26-12.12-.003-.005A2.614 2.614 0 0012 3.297zm-.4 1.905a.814.814 0 011.095.285l.001.002 7.253 12.108a.814.814 0 01-.695 1.216H4.746a.813.813 0 01-.695-1.216L11.304 5.49v-.002a.814.814 0 01.296-.285z"
      ></path>
    </>
  );
};

AlertTriangle.displayName = 'AlertTriangle';
export default withColor(AlertTriangle, {
  stroke: '#00112F',
  fillInColor: true
});
