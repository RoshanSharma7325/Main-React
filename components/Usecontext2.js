import React, { useContext } from 'react';
import { RoshanContext } from './UseContect';

const Usecontext2 = () => {
  const vikash = useContext(RoshanContext);

  return (
    <div>
      <h1>{vikash}</h1>
      {/* Additional content */}
      
      
    </div>
  );
}

export default Usecontext2;
