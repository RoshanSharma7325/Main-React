import React from 'react'
import Reausing from './Reausing'

const Hello = () => {
    const data = [
        {
        header  :'Roshan',
        body:'Roshan Sharma',
        title:'my name is Roshan'
    },
        {
        header  :'Roshan',
        body:'Roshan Sharma',
        title:'my name is Roshan'
    },
        {
        header  :'Roshan',
        body:'Roshan Sharma',
        title:'my name is Roshan'
    },
]
    return (
        <>
<Reausing/>
            
            <div className='container'>
                <div className='row'>
                {
                    data.map((card)=>{
                        return(
                            <div className='col-lg-4 col-md-4 col-sm-12  card bg-danger text-light '>
                            <div className='card-hader'><h1>{card.header}</h1>
                                <div className='card-body'>
                                    <h1>{card.body}</h1>
                                    <div className='card-title'>
                                        <p>{card.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }

                </div>
            </div>
        </>
    )
}

export default Hello


//****************** */

// import React from 'react'

// const Hello = () => {
//     const data = [
//         {
//             heaider:'Roshan',
//             body:'My name Is Roshan',
//             footer:'class 12th'
//         },
//         {
//             heaider:'Roshan',
//             body:'My name Is Roshan',
//             footer:'class 12th',
//             ankit:'primary'
//         },
//         {
//             heaider:'Roshan',
//             body:'My name Is Roshan',
//             footer:'class 12th',
//             roshan:'success',
//             imgPath:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"
//         },
//     ]
//     return (
//         <>
//             <div className='container'>
//                 <div className='row '>
//                     {
//                         data.map((card,l) => {
//                             return (
//                                 <div key={l} className='col-lg-4 col-md-4 col-sm-12 card bg-danger text-light '>
//                                     <div className='card-heaider'>
//                                         {
//                                             card.imgPath?<>
//                                         <img src={card.imgPath} alt="" style={{width:"100%", height:"19rem"}}/>
//                                             </>:<></>
//                                         },
//                                         <img src={card.path}></img>
//                                         <h1 className={`bg-${card.roshan}`}  >{card.heaider}</h1>
//                                         <div className='card-body'>
//                                             <h3 className={`text-${card.ankit}`}>{card.body} </h3>
//                                             <div className='card-footer'>
//                                                 <p>{card.footer}</p>
//                                             </div>
//                                         </div>

//                                     </div>

//                                 </div>
//                             )
//                         })
//                     }

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Hello


//****************************** 


// import React from 'react'

// const Hello = () => {
//     const data = [
//         {
//             rt: 'roshan',
//             mt: 'kgjrhkgrvbkj jkfkf jgbrbrkjg ',
//             pt: 'jhkvfkj',
//         },

//         {
//             rt: 'roshan',
//             mt: 'kgjrhkgrvbkj jkfkf jgbrbrkjg ',
//             pt: 'jhkvfkj',
//         },
//         {
//             rt: 'roshan',
//             mt: 'kgjrhkgrvbkj jkfkf jgbrbrkjg ',
//             pt: 'jhkvfkj',
//         },

//     ]
    
//   return (
//     <>
//     <div className='container'>
//         <div className='row'>
//             {
//             data.map((card)=> {
//                 return(
//                     <div className='col-lg-4 col-md-6 col-sm-12'>
//                 <div className='card-rt'><h1>{card.rt}</h1>
//                 <div className='card-mt'><p>{card.mt}</p>
//                     <div className='card-pt'><h1>{card.pt}</h1>

//                     </div>
//                 </div>
//                 </div>

//             </div>
//                 )
//             }

//             )
//         }
//         </div>

//     </div>
     
//     </>
//   )
// }


// export default Hello
