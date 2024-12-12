import React from 'react'
import Second from './Second'
const first = () => {
  const rohit={
    background:'red',
    color:'green'
  }
  return (
    <div>
      <h1 style={rohit}>roshan</h1>
     
      <Second Name={rohit}/>
    </div>
  )
}

export default first
