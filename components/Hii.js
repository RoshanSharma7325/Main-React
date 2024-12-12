// // import React from 'react'

// // const Hii = () => {
// //   const data =[
// //     {

// //       first:'Ankit',
// //       secoind:'Yadav',
// //       three:'@mdo',


// //     },
// //     {

// //       first:'Roshan',
// //       secoind:'Sharma',
// //       three:'@mdo',


// //     },
// //     {

// //       first:'Rohit',
// //       secoind:'Otto',
// //       three:'@mdo',


// //     },
// //   ]
// //   return (

// //     <>
// //         <table class="table">
// //         <thead>
// //     <tr>
// //       <th scope="col">#</th>
// //       <th scope="col">First</th>
// //       <th scope="col">Last</th>
// //       <th scope="col">Handle</th>
// //     </tr>
// //   </thead>
// //     {
// //       data.map((Roshan,l)=>{
// //        return(



// //   <tbody>
// //     <tr>
// //       <th scope="row">{l+1}</th>
// //       <td>{Roshan.first}</td>
// //       <td>{Roshan.secoind}</td>
// //       <td>{Roshan.three}</td>
// //     </tr>

// //   </tbody>

// //        )
// //       })
// //     }  

// //     </table>

// //       {/* <h1>Ankit yadav</h1> */}
// //     </>
// //   )
// // }

// // export default Hii

// // import React from 'react'

// // const Hii = () => {
// //   const rt =[
// //     {
// //      ankit :'roshan',
// //     },
// //     {
// //      ankit :'roshan',
// //     },
// //     {
// //      ankit :'roshan',
// //     },
// //   ]
// //   return (
// //     <>
// //     {

// //      rt.Map((yy)=>{
// //       return(

// //         <h1>{yy.ankit}</h1>
// //       )
// //     }
// //     )


// //     }
// //     </>
// //   )
// // }

// // export default Hii

// // import React from 'react'

// // const Hii = () => {
// //   const data = [
// //     {
// //       aa:'roshan',
// //     }
// //   ]
// //   return (
// //     <>

// //      {
// //       data.map((first)=>{
// //         return(
// //         <h1>{first.aa}</h1>
// //         )
// //       })
// //      } 
// //     </>
// //   )
// // }

// // export default Hii


// import React from 'react'
// import Reausing from './Reausing'

// const Hii = () => {
//   return (
//     <>
//     <Reausing/>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             {/* <li><hr class="dropdown-divider"></li> */}
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input type='search' placeholder='enter your name'></input>
//         {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     </>
//   )
// }

// export default Hii


// import React from 'react'

// const Hii = () => {
//   const data = [
//     {
//       h5:'Card title',
//       p:'Some quick example text to build on the card title and make up the bulk of the cards content',
//       btn:'Go somewhere'
//     },
//   ]
//   return (
//     <>
//       {
//         data.map((d) => {
//           return (
//             <div>
//               <div class="card" >
//                 <img src="..." class="card-img-top" alt="..." />
//                 <div class="card-body">
//                   <h5 class="card-title">{d.h5}</h5>
//                   <p class="card-text">{d.p} </p>
//                   <a href="#" class="btn btn-primary">{d.btn}</a>
//                 </div>
//               </div>
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }

// export default Hii


import React from 'react'

const Hii = () => {
  const rt = [
    {
      er:'roshan'
    }
  ]
  return (
    <div>
      {
        rt.map((d)=>{
          return(
            <h1>{d.er}</h1>
          )
        })
      }
    </div>
  )
}

export default Hii
