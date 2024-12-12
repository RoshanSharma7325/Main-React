import React from 'react'
import Reausing from './Reausing'

const Demo = () => {

  const my =[
    {
      roshan : 'rahul',
      rk: 'my name is roshan sharma',
      ashu:'danger'
    },
    {
      roshan : 'rahul',
      rk: 'my name is roshan sharma',
    },
    {
      roshan : 'rahul',
      rk: 'my name is roshan sharma',
    },
  ]


    

  




  return (
    <>
<Reausing/>
     <div className='container'>
      <div className='row'>     
        {
         my.map((card3,tr)=>{
          return(

            <div key={tr} className='col-lg-4 col-md-6 col-sm-12'>

        <div className='card-header'>
          <h1 className={`bg-${card3.ashu}`}>{card3.roshan }</h1>
          <div className='card-boby'>
            <p>
              {card3.rk}
            </p>

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

export default Demo

