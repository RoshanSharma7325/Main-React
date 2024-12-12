import React, { createContext } from 'react';
import Usecontext2 from './Usecontext2';

const RoshanContext = createContext();

const UseContect = () => {
  const data = "ankit";

  return (
    <div>
      <RoshanContext.Provider value={data}>
        <Usecontext2 />
      </RoshanContext.Provider>
    </div>
  );
}

export default UseContect;
export { RoshanContext };
