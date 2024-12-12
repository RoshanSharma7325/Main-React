//  import React, { useState } from 'react'
 
//  const FirstFile = () => {
  
//   const [data , setdata] = useState(0)
 

//   const Name=["gajju","roshan","ghghh"]

//   const name =()=>{
//     if(data < Name.length -1){
//     setdata(data +  1 )
//   }}

//    return (
//      <div className='m-5'>

//       {Name[data]}

//       <button onClick={()=>{name()}}>Click</button>

       
//      </div>
//    )
//  }
 
//  export default FirstFile

// import React,{useEffect, useState} from 'react'

// const FirstFile = () => {
//   const [data , setdata,] = useState(0)  
 

//   useEffect (() => {
//     setTimeout(()=>{
//       setdata (data+1)
//     },1000)
//   })
//   return (
//     <div>

//       <h1>{data}</h1>
//       {/* <button className='btn btn-danger ' onClick={unnn}>add</button> */}
//     </div>
//   )
// }

// export default FirstFile





// import React, { useState } from 'react'

// const FirstFile = () => {
//   const[count,setCount] =useState();


//   useState(()=>{
//     setCount('first')
//   },[])
//   return (
//     <div className='d-flex gap-4 mt-5'>
//       <button onClick={()=>{setCount('first')}} style={{background:count==="first"?"red":""}}>First</button>
//       <button onClick={()=>{setCount('second')}} style={{background:count==="first"?"red":""}}>First</button>
//       <button onClick={()=>{setCount('third')}} style={{background:count==="first"?"red":""}}>First</button>


//       {
//         count ==="first"?<>1khhj</>:<></>
        
//       } 

//       {
//         count ==="second"?<>2</>:<></>
//       }

//       {
//         count ==="third"?<>3</>:<></>
//       }

//     </div>
//   )
// }

// export default FirstFile






// import React, { useState } from 'react'

// const FirstFile = () => {
//   const [bg,setbg]=useState('blue')
//   const [text ,setbgtext]=useState('red')
//   const fun= ()=>{
//   if( bg=="black"){
//     setbg('yellow')
//     setbgtext('white')
//   }
//   else{
//     setbg('pink')
//     setbgtext('aqua')
//   }
//   }

//   return (
//     <div>
//       <h1 style={{backgroundColor:bg,color:text}}>RNS</h1>

//       <button className='btn btn-danger ' onClick={()=>{fun()}}>add</button>
//     </div>
//   )
// }

// export default FirstFile




// import React, { useEffect, useState } from 'react'

// const FirstFile = () => {

// const [siz , setsiz] = useState(16);

// const inc = () => {
//     setsiz(Math.min (siz +2,50))
// }

// const dec = () => {
//     setsiz(Math.max(siz -2,18))
// };

// useEffect(()=>{
//   alert('This is my home page')
// },[])


//   return (
//     <div>
//         <h1 style={{fontSize:siz}}>Roshan </h1>
//         <button className='btn btn-success' onClick={inc}>click</button><br/><br/>
//         <button className='btn btn-outline-danger' onClick={dec}>click</button>
//     </div>
//   )
// }

// export default FirstFile


// import React, { useState } from 'react'

// const FirstFile = () => {
//  const [coust,setCount] = useState()

    

//   return (


//     <div> 
//       <form>
//   <div class="mb-3 mt-5 ">
//     <h1>form</h1>
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//     </div>
//   )
// }

// export default FirstFile

//  import React, { useEffect, useState } from 'react'
 
//  const FirstFile = () => {
//   const [count,setCount] =useState();

//   useEffect(()=>{
//     setCount('first')
//   },[])


//    return (
//      <>
//       <div className=' d-flex gap-5'>
//       <button onClick={()=>{setCount('first')}} style={{color:count==="first"?'red':''}}>HTML</button>
//        <button onClick={()=>{setCount('sec')}} style={{color:count==="sec"?'red':''}}>CSS</button>
//        <button onClick={()=>{setCount('third')}} style={{color:count==="third"?'red':''}}>JS</button>
//        <button onClick={()=>{setCount('for')}} style={{color:count==="for"?'red':''}}>REACT</button>
//       </div>


// {
//   count==="first"?<>
//   <h1>HTML :</h1>
//         <p> Ipsum is simply dummy text of the printing and typesetting indust  Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust</p>
//   </>:<></>
// }
// {
//   count==="sec"?<>
//   <h1>CSS :</h1>
//         <p> Ipsum is simply dummy text of the printing and typesetting indust  Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust</p>
//   </>:<></>
// }
// {
//   count==="third"?<>
//   <h1>JS :</h1>
//         <p> Ipsum is simply dummy text of the printing and typesetting indust  Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust</p>
//   </>:<></>
// }
// {
//   count==="for"?<>
//   <h1>REACT :</h1>
//         <p> Ipsum is simply dummy text of the printing and typesetting indust  Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust</p>
//   </>:<></>
// }




//       <div style={{display:count==='first'?'block':"none"}} >
//         <h1>HTML :</h1>
//         <p> Ipsum is simply dummy text of the printing and typesetting indust  Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust</p>
//       </div>
//       <div style={{display:count==='sec'?'block':"none"}}>
//         <h1>CSS :</h1>
//         <p> Ipsum is simply dummy text of the printing and typesetting indust  Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust</p>
//       </div>
//       <div style={{display:count==='third'?'block':"none"}}>
//         <h1>JS :</h1>
//         <p> Ipsum is simply dummy text of the printing and typesetting indust  Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust</p>
//       </div>
//       <div style={{display:count==='for'?'block':"none"}}>
//         <h1>REACT :</h1>
//         <p> Ipsum is simply dummy text of the printing and typesetting indust  Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust Ipsum is simply dummy text of the printing and typesetting indust</p>
//       </div>



//      </>
//    )
//  }
 
//  export default FirstFile



// import React, { useState } from 'react'

// const FirstFile = () => {
//   const [deta ,setDeta]= useState()
//   return (
//     <>
//     <h1 style={{backgroundColor:deta}} >Roshan</h1>
//       <button onClick={()=>{setDeta('green')}}>Click Me</button>
//     </>
//   )
// }

// export default FirstFile







