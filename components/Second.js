import React from 'react'
import Third from './Third'

import roshann from '../img/roshan.jpg'


const Second = (props) => {
  return (
    <div>
      <h1 style={props.Name}>vikash</h1>
      <Third img={roshann} getName={props.Name}/>
      
      

    </div>
  )
}

export default Second
