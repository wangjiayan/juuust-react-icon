import React from 'react';
import { withColor } from '../components/Icon';

const Menu = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.385 6.857a.9.9 0 01.9-.9h15.429a.9.9 0 110 1.8H4.285a.9.9 0 01-.9-.9zm0 5.143a.9.9 0 01.9-.9h15.429a.9.9 0 110 1.8H4.285a.9.9 0 01-.9-.9zm0 5.143a.9.9 0 01.9-.9h15.429a.9.9 0 010 1.8H4.285a.9.9 0 01-.9-.9z"
      ></path>
    </>
  );
};

Menu.displayName = 'Menu';
export default withColor(Menu, { stroke: '#00112F', fillInColor: true });
