import React, {  useMemo, useState } from 'react'

const Usememo = () => {
    const [plus,setplus] = useState(0);
        const [minus,setminus]=useState(1000);

        const mlt = useMemo(()=>{
            console.log('hello Meno');          
            return plus*10
        })
  
  return (
    <div className='p-5 m-5'>
      <h1>{plus}</h1> {mlt}
      <button onClick={()=>setplus(plus+1)}>plus</button>

      <h1>{minus}</h1>
      <button onClick={()=>setplus(minus-1)}>minus</button>
    </div>
  )
}

export default Usememo
