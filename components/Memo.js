

//  import React, {  useMemo, useState } from 'react'
 
//  const Memo = () => {
  
//   const [plus , setplus] = useState(0);
//   const [minus , setminus] = useState(1000);
        

//  const mlt = useMemo(()=>{
//     console.log('hello Meno')
//     return plus*10
//  },[plus])

//    return (
//      <div className='m-5'>

//       <h1>{plus}</h1>


//       <button onClick={()=>{setplus(plus+1)}}>plus</button>

//       <h1>{minus}</h1>
//       <button onClick={()=>{setminus(minus-1)}}>minus</button>

       
//      </div>
//    )
//  }
 
//  export default Memo


// import React, { useEffect, useState } from 'react'

// const Memo = () => {
//   const [data,setdata] = useState(0)
 
//   const add=()=>{
//     if (data<15){

//       setdata(data+1)
//     }
//   }
//    const dec =()=>{
//     if (data>0){

//       setdata(data-1)
//     }

//    }
//   return (
//     <>
//     <h1>{data}</h1>
//     <button onClick={add}>add</button>
//     <button onClick={dec}>submit</button>  
//     </>
//   )
// }

// export default Memo


// import React, { useState } from 'react'

// const Memo = () => {
//   const [data,setdata] = useState(0)

//   const add =()=>{
    
//     setdata(data+1)
//   }
//   const dec =()=>{
//     if(data>0){

//       setdata(data-1)
//     }
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={add}>add</button>
//       <button onClick={dec}>dec</button>
//     </div>
//   )
// }

// export default Memo

// // import React from 'react'

// // const Memo = () => {
// //   const data= [
// //      {
// //       rk:"roshan",
// //      }
// //   ]
  
// //   return (
// //     <>
// //     {
// //       data.map((histor)=>{
// //         return(
// //           <h1>{histor.rk}</h1>
// //         )
// //       })
// //     }
    
   
// //     </>
// //   )
// // }

// export default Memo

