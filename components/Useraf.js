// import React, { useRef, useState } from "react";

// const Useraf = () => {
//   const [data, useset] = useState();

//   const reftext = useRef();
//   console.log(reftext, "hello everyone");
//   const refer = () => {
//     useset(" ");
//     reftext.current.focus();
//   };
//   const update = () => {
//     reftext.current.value = "nisha";
//     reftext.current.style.color = "red";
//   };
//   return (
//     <div>
//       <input ref={reftext} type="text" value={data} placeholder="enter your name :"onChange={(e) => {
//           useset(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           refer();
//         }}
//       >
//         on click
//       </button>
//       <button
//         onClick={() => {
//           update();
//         }}
//       >
//         update
//       </button>
//     </div>
//   );
// };

// export default Useraf;

// import React, { useRef, useState } from 'react'

// const Useref = () => {
//   const [data, setdata] = useState("Roshan");
//   // const myarr = [1,2,3,4]
//   // let i = 0
//   const RefText = useRef();
//   const Refresh = () => {
//     setdata('');
//     RefText.current.focus();
//   }
 
//   const update = () => {
//     // RefText.current.value = myarr[i]
//     RefText.current.value = "vikash";
//     RefText.current.style.color = "red";
//     RefText.current.style.backgroundColor='black';
//     RefText.current.style.width="30%"
//     RefText.current.style.borderRadius='10px'
//     RefText.current.style.border='2px solid red'
//     // i++;
//   }
//   return (
//     <div className='p-5'>
//       <h1>Hello</h1>
//       <input type='text' ref={RefText} value={data} onChange={(e) => { setdata(e.target.value) }} />
//       <button className='btn btn-primary ms-5' onClick={() => { Refresh() }}>Click</button>
//       <button className='btn btn-primary ms-5' onClick={() => { update() }}>update</button>
//       {/* <p>{data}</p> */}
//     </div>
//   )
// }

// export default Useref



// dom manuplate kay kam m
// crunt ke help say


import React, { useRef, useState } from 'react'

const Useraf = () => {
  const [data , setdata] =  useState('Ankit');
  const Ref = useRef();
  const refresh =()=>{
    setdata('')
    Ref.current.focus();
  }
  const upda = ()=>{
    Ref.current.value = 'roshan';
    Ref.current.style.color = "red";
  }
  return (
    <>
      <input className='mt-5 ' type='text' ref={Ref} value={data} onChange={(e)=>{setdata(e.target.value)}} />
      <button className='btn btn-primary  ms-2' onClick={()=>{refresh()}} >ref</button>
      <button className='btn btn-primary  ms-2' onClick={()=>{upda()}} >update</button>
    </>
  )
}

export default Useraf


// import React, {useRef , useState } from 'react'

// const Useraf = () => {
//   const [data,setdata] = useState('ankit')
//   const Ref = Useraf()
//   const Rafret =()=>{
//     setdata('');
//     Ref.current.focus();
//   }
//   const duch = ()=>{
//     Ref.current.value = 'roshan';
//     Ref.current.style.color = "red"; 
//   }
//   return (
//     <div>
//       <input add={Ref} value={data} onChange={(e)=>{setdata(e.target.value)}}/>
//      <button onClick={()=>{Rafret()}}>add</button>
//      <button onClick={()=>{duch()}}>sumit</button>
//     </div>
//   )
// }

// export default Useraf
