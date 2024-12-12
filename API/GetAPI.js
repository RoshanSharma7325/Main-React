//  import React, { useEffect, useState } from 'react'
 
//  const GetAPI = () => {


//   const [data9 , setData] = useState()

//   const GetApi =() =>{
//     try {
//       const requestOptions = {
//         method: "GET",
//         redirect: "follow"
//       };
      
//       fetch("https://fakestoreapi.com/products", requestOptions)
//         .then((response) => response.json())
//         .then((result) =>{
//           setData(result)
//         })
//         .catch((error) => console.error(error));
      
//     } catch (error) {
      
//     }
//   }

//   useEffect(()=>{
//     GetApi()
//   },[])

//   const data = [
//     {
//          name:'mahakal',
//          name1:'mahadev',
//   },
//     {
//          name:'mahakal',
//          name1:'mahadev',
//   },

// ]
//    return (
//      <div>
       

//        <div className='container'>
//         <div className='row'>
//          {
//           data9?.map((res)=>{
//             return(
//               <div className='col-lg-4 col-md-6 col-sm-12 mt-4'>


//               <div className='card'>
//                 <div className='card-header'>
  
//                   <img src={res.image}  style={{width:'100%', height:'250px'}}/>
//                 </div>
//                 <div className='card-body'>
//                    <p>{res.title}</p>
//                    <p>{res.price}</p> 
//                    <p>{res.rating.rate}</p> 
//                    <p>{res.rating.count}</p> 
//                 </div>
   
//               </div>
  
//             </div>
//             )
//           })
//          }
//         </div>
//        </div>
//      </div>
//    )
//  }
 
//  export default GetAPI




// import React, { useEffect, useState } from 'react'

// const GetAPI = () => {
  
//   const [data1,setdata] = useState()
//   const GetApi = (()=>{
//     fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((result) => setdata(result))
//   })
// useEffect(()=>{
//   GetApi()
// })


// //   const data = [{
// //     name : "roshan"
// //   }
// // ]
//   return (
//     <div>
//       <div className='container'>
//         <div className='row'>
//           {
//             data1 && data1.map((rem)=>{
//              return(
//               <div className='col-sm-12 col-md-6 col-lg-4'>
//               <p>{rem.title}</p>
//            </div>
//              )
//             })
//           }

//         </div>

//       </div>
//     </div>
//   )
// }

// export default GetAPI



// import React, { useEffect, useState } from 'react'

// const GetAPI = () => {
//   const [count,setcount] = useState()
//   const data = ()=>{

//     const requestOptions = {
//       method: "GET",
//       redirect: "follow"
//     };
    
//     fetch("https://fakestoreapi.com/carts/5", requestOptions)
//       .then((response) => response.json())
//       .then((result) => setcount(result))
      
//   }

//    useEffect(()=>{
//     data()
//    },[])


//   return (
//     <div>
//       <div>
//         {
//           count?.map((i)=>{
//             return(
//               <div className='card'>
//                 <div className='card-header'>
//                    <h1>{i.userId}</h1>
//                 </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default GetAPI




// import React , { useEffect, useState } from 'react'
// const GetAPI = () => {
//     const [data,setdata] = useState([]);
//     const [data2,setdata2] = useState([]);
//     const count =()=>{
//       const myHeaders = new Headers();
//   myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6NSwiaWF0IjoxNzEyMzgzMDcyLCJleHAiOjE3NDM5MTkwNzJ9.UP90yQ-6_YxC063fkw0uf-tfcDQSArnYXcD18u6XvPs");
  
//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow"
//   };
  
//   fetch("http://98.70.11.123:7001/api/admin/numbers/half/sangam", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       if(result.status=="001"){
//         setdata(result.halfSangam.openPanna)
//       }
//      else if(result.status=="001"){
//         setdata2(result.halfSangam.closePanna)
//       }
//     });
//     }
//     useEffect(()=>{
//       count()
//     },[])
//     return (
//       <div>
        
//         <h1>open panna</h1>
  
//   {
//     data?.map((i)=>{
//       return(
//         <>
//         <button className='btn btn-success text-light' >{i.number}</button>
//         </>
//       )
//     })
//   }
//   <br/>
//   <h1>Close panna</h1>
//   {
//     data2?.map((i)=>{
//       return(
//         <>
//         <button className='btn btn-danger text-light' >{i.panna}</button>
  
//         </>
//       )
//     })
//   }
  
       
//       </div>
//     )
//   }
  
// export default GetAPI




// import React, { useEffect, useState } from 'react'

// const GetAPI = () => {
//   const [count,setcount] = useState([])
//   const data = () =>{
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow"
//     };
    
//     fetch("https://fakestoreapi.com/products?limit=5", requestOptions)
//       .then((response) => response.json())
//       .then((result) => {setcount(result)})
//       .catch((error) => console.error(error));
//   }
//   useEffect(()=>{
//     data()
//   },[])
//   return (
//     <div>
//       {
//         count?.map((item)=>{
//           return(
//             <div>
//               <img style={{width:'200px'}} src={item.image}/>
//               <h1></h1>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default GetAPI


//postapi



// import React, { useEffect, useState } from 'react'
// import { baseUrl } from './urls'
// // import { baseUrl } from './Url'

// const App = () => {
//     const[data ,setdata]=useState()

//     const callApi =  async() =>{
//         const myHeaders = new Headers()
//         myHeaders.append("Content.Type","application/json")

//         const raw = JSON.stringify()
//         try{
//         const requestOptions = {
//             method : 'POST',
//             // Headers:myHeaders ,
//             redirect: "follow",

//         }
//         const res = await fetch(
//            `${baseUrl}/learner/get/deposits/data`,
//             requestOptions
//         )
//         const result = await res.json();

//         if(result.status === "001"){
//             setdata(result?.data)
//             console.log("res",result);
//         }else{
//             alert("error occured")
//         }
//     }
//         catch (error){
//             console.log(error);
//         }
//     }
//     useEffect(()=>{
//         callApi()
//     } , [])
//   return (
//     <div>
   
//     </div>
//   )
// }
// export default App   




// import React, {  useState } from 'react'
// import { baseUrl } from './urls'

// const GetAPI = () => {

//   const [email, setemail] = useState("")
//   const [pass, setPassword] = useState("")


//   const register = async () => {
//     try {

//       const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       "email":email ,
//       "password":pass
//     })

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//       }

//       const res = await fetch(
//         `${baseUrl}/learner/register`,
//         requestOptions
//       )
//       const result = await res.json()

//       if (result?.status == "001") {
//       } else {
        
//       }
//       console.log(result)
//     }

//     catch (error) {
//       console.log(error);
//     }

//   }


//   return (
//     <div>

// <input type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
// <input type='password' value={pass} onChange={(e)=>setPassword(e.target.value)}/>
// <button onClick={register}>
//   Submitform
// </button>

//     </div>
//   )
// }

// export default GetAPI


// import React, { useEffect, useState } from 'react'

// const GetAPI = () => {
//   const [count,setcount] = useState()
//   const data = () =>{
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow"
//     };
    
//     fetch("https://fakestoreapi.com/products", requestOptions)
//       .then((response) => response.json())
//       .then((result) => setcount(result))
      
    
//   }
//   useEffect(()=>{
//     data()
//   },[])


  
//   return (
//     <div>
//      {
//      count?.map((i)=>{
//       return(
//         <h1>{i.price}</h1>
//       )
//      })
//      } 
//     </div>
//   )
// }

// export default GetAPI

// import React, { useEffect, useState } from 'react'

// const GetAPI = () => {
//   const [count ,setcount] = useState()

//   const data = () => {
//     const requestOptions = {
//       method: "GET",
//       redirect: "follow"
//     };
    
//     fetch("https://fakestoreapi.com/products?limit=5", requestOptions)
//       .then((response) => response.json())
//       .then((result) => setcount(result))
      
//   }
//   useEffect(()=>{
//     data()
//   },[])
//   return (
//     <div>
//     {
//         count?.map((f)=>{
//           return(
//             <>
//         <h3>{f.title}</h3>
//         <h3>{f.price}</h3>
//         <h3>{f.rating.rate}</h3>
//         <h3>{f.rating.count}</h3>
//         </>
//           )
          
//         })
//     }
//     </div>
//   )
// }

// export default GetAPI




import React, { useState } from 'react'

const GetAPI = () => {

  const [email, setEmail] = useState("")
    const [pass, setPassword] = useState("")

  console.log(email,"hii")
    const LoginApi = ()=>{
      try {
        const formdata = new FormData();
formdata.append("username", email);
formdata.append("password", pass);

const requestOptions = {
  method: "POST",
  body: formdata,
  redirect: "follow"
};

fetch("https://dummyjson.com/auth/login", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result){
       localStorage.setItem('token',result.token)
    }else{
      console.log("no data")
    }
  })
  .catch((error) => console.error(error));    } catch (error) {
        console.log(error,"error")

      }
    }
  return (
    <div>
       

<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type='password' value={pass} onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={LoginApi}>
  Submit
</button>

    
    </div>
  )
}

export default GetAPI


