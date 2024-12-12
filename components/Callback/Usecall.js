import React, { useCallback, useState } from 'react'
import Usecall1 from './Usecall1';

import Lottie from 'react-lottie-player'
import lottieJson from '../../img/Animation - 1711100089752.json'

const Usecall = () => {
    const [data,setdata]=useState(0);
    const [count,setcount]=useState(0); 
    const Demo = useCallback(()=>{

    },[count])
  return (
    <div className='mt-5'>

       <Usecall1 Demo = {Demo} count={count} /> 
       <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 150, height: 150 }}
    />
       <h1>{data}</h1>
    <button onClick={()=>{setdata(data+1)}}>add</button>
    <h1>{count}</h1>
    <button onClick={()=>{setcount(count+1)}}>sumit</button>
    </div>
  )
}

export default Usecall
