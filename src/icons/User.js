import React from 'react';
import { withColor } from '../components/Icon';

const User = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.186a2.529 2.529 0 100 5.057 2.529 2.529 0 000-5.057zM7.67 7.715a4.329 4.329 0 118.657 0 4.329 4.329 0 01-8.657 0zm-2.16 7.225a4.329 4.329 0 013.06-1.268h6.857A4.329 4.329 0 0119.757 18v1.715a.9.9 0 01-1.8 0V18a2.529 2.529 0 00-2.529-2.528H8.571A2.529 2.529 0 006.043 18v1.715a.9.9 0 11-1.8 0V18c0-1.148.456-2.249 1.267-3.06z"
      ></path>
    </>
  );
};

User.displayName = 'User';
export default withColor(User, { stroke: '#00112F', fillInColor: true });
