import React from 'react';
import { withColor } from '../components/Icon';

const Arrival = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.821 5.32L6.086 10.88l4.417 1.104a.9.9 0 01.655.655l1.104 4.417 5.56-11.735zm.242-2.105c1.189-.563 2.428.675 1.864 1.864l-6.516 13.758c-.563 1.188-2.305 1.016-2.624-.26L9.543 13.6l-4.978-1.244c-1.275-.319-1.448-2.06-.26-2.623l13.758-6.517z"
      ></path>
    </>
  );
};

Arrival.displayName = 'Arrival';
export default withColor(Arrival, { stroke: '#00112F', fillInColor: true });
