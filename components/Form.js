// import React, { useEffect, useState } from 'react'

// const Form = () => {
//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         setCount('first')
//     },[])
//     return (
//         <>

//             {
//                 count === 'first' ? <>
//                     <div className='signup container '>
//                         <form>
//                             <div class="mb-3">
//                                 <label for="exampleInputEmail1" class="form-label">Email address</label>
//                                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                 <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleInputPassword1" class="form-label">Password</label>
//                                 <input type="password" class="form-control" id="exampleInputPassword1" />
//                             </div>
//                             <div class="mb-3 form-check">
//                                 <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//                                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
//                             </div>
//                             <button type="submit" class="btn btn-primary" onClick={() => { setCount('sec') }} >Submit</button>
//                         </form>
//                     </div>

//                 </> : <></>
                  
//             }
//             {
//                 count === 'sec' ? <>

//                     <button onClick={() => { setCount('first') }}>⬅️Back</button>
//                     <label for="inputPassword5" class="form-label">Password</label>
//                     <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
//                     <div id="passwordHelpBlock" class="form-text">
//                         Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
//                     </div>
//                 </> : <></>
//             }
//         </>
//     )
// }

// export default Form


// import React, { useEffect, useState } from 'react'

// const Form = () => {
//     const [count, setCount] = useState()

//     useEffect(() => {
//         setCount('first')
//     }, [])

//     return (

//         <>
//             <div style={{ display: count === "first" ? "block" : 'none' }}>
//                 <div class="mb-3">
//                     <label for="disabledTextInput" class="form-label">Disabled input</label>
//                     <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" />
//                 </div>
//                 <div class="mb-3">
//                     <label for="disabledSelect" class="form-label">Disabled select menu</label>
//                     <select id="disabledSelect" class="form-select">
//                         <option>Disabled select</option>
//                     </select>
//                 </div>
//                 <div class="mb-3">
//                     <div class="form-check">
//                         <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
//                         <label class="form-check-label" for="disabledFieldsetCheck">
//                             Can't check this
//                         </label>
//                     </div>
//                 </div>
//                 <button onClick={() => { setCount("sec") }} type="submit" class="btn btn-primary">Submit</button>
//             </div>

//             <div style={{display:count==="sec"?"block":"none"}} class="row g-3 align-items-center">
//                 <div class="col-auto">
//                     <label for="inputPassword6" class="col-form-label">Password</label>
//                 </div>
//                 <div class="col-auto">
//                     <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
//                 </div>
//                 <div class="col-auto">
//                     <span id="passwordHelpInline" class="form-text">
//                         Must be 8-20 characters long.
//                     </span>
//                 </div>
//                 <button onClick={()=>{setCount("first")}}>back</button>
//             </div>
//         </>
//     )
// }

// export default Form



// import React, { useEffect, useState } from 'react'
// import { FaApple } from "react-icons/fa";
// import { TbXxx } from "react-icons/tb";

// const Form = () => {
//     const [count,setCount] = useState(0)
//     useEffect(()=>{
//         setCount('first')
//     },[])
//   return (
//     <>
//       {
//         count ==='first'?<div style={{ display: count === "first" ? "block" : 'none' }}>
         
//          <TbXxx />
//             <div class="mb-3">
//               <label for="exampleInputEmail1" class="form-label">Email address</label>
//               <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//               <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div class="mb-3">
//               <label for="exampleInputPassword1" class="form-label">Password</label>
//               <input type="password" class="form-control" id="exampleInputPassword1"/>
//             </div>
//             <div class="mb-3 form-check">
//               <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//               <label class="form-check-label" for="exampleCheck1">Check me out</label>
//             </div>
//             <button onClick={() => { setCount("sec") }} type="submit" class="btn btn-primary">Submit</button>
            
//         </div>:<></>
        
      
//       }

// {
//                 count === 'sec' ? <>

//                     <button onClick={() => { setCount('first') }}> <FaApple />Back</button>
//                     <label for="inputPassword5" class="form-label">Password</label>
//                     <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />
//                     <div id="passwordHelpBlock" class="form-text">
//                         Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
//                     </div>
//                 </> : <></>
//             }
//         </>
//     )
// }


// export default Form

import React, { useEffect, useState } from 'react'

const Form = () => {
  const [data,setdata] = useState()
  useEffect(()=>{
    setdata("first")
  },[])

  return (
    <>
    
     {
        data== 'first'?<> 
         <button onClick={()=>{setdata('sec')}}>add</button>
      <p>hgfgvfjhk</p>

        
        </>:<> </>
     }
     {
        data== 'sec'?<> 
         <button onClick={()=>{setdata('first')}}></button>
      <p>vikash</p>

        
        </>:<> </>
     }

    </>
  )
}

export default Form
