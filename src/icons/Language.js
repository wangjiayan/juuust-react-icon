import React from 'react';
import { withColor } from '../components/Icon';

const Language = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.382 11.1h3.337a14.015 14.015 0 012.235-6.495A7.679 7.679 0 004.382 11.1zm7.62-6.272A12.215 12.215 0 009.525 11.1h4.95a12.215 12.215 0 00-2.475-6.272zm2.474 8.072a12.215 12.215 0 01-2.475 6.272A12.215 12.215 0 019.526 12.9h4.95zm-6.757 0H4.382a7.679 7.679 0 005.572 6.495A14.015 14.015 0 017.719 12.9zm6.33 6.495a14.016 14.016 0 002.234-6.495h3.337a7.679 7.679 0 01-5.572 6.495zM19.62 11.1h-3.337a14.015 14.015 0 00-2.235-6.495A7.679 7.679 0 0119.62 11.1zM2.53 12a9.471 9.471 0 1118.943 0A9.471 9.471 0 012.53 12z"
      ></path>
    </>
  );
};

Language.displayName = 'Language';
export default withColor(Language, { stroke: '#00112F', fillInColor: true });
