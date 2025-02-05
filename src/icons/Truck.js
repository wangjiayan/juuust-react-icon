import React from 'react';
import { withColor } from '../components/Icon';

const Truck = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.6 5.393c0-1.05.85-1.9 1.9-1.9h10.06c1.05 0 1.9.85 1.9 1.9V6.8h1.464a.9.9 0 01.709.346l2.576 3.297a.9.9 0 01.19.554v6.106a.9.9 0 11-1.8 0v-5.796L17.486 8.6H15.56a.9.9 0 01-.9-.9V5.393a.1.1 0 00-.1-.1H4.5a.1.1 0 00-.1.1v11.71a.9.9 0 11-1.8 0V5.393zm13.206 4.201a.9.9 0 01.9.9v.484h.505a.9.9 0 010 1.8h-1.405a.9.9 0 01-.9-.9v-1.384a.9.9 0 01.9-.9zM7.4 17.855a.852.852 0 111.704 0 .852.852 0 01-1.704 0zm.852-2.652a2.652 2.652 0 102.492 3.559h2.464a2.653 2.653 0 10-.005-1.8h-2.454a2.653 2.653 0 00-2.497-1.759zm6.604 2.765a.912.912 0 000-.22.852.852 0 110 .22z"
      ></path>
    </>
  );
};

Truck.displayName = 'Truck';
export default withColor(Truck, { stroke: '#00112F', fillInColor: true });
