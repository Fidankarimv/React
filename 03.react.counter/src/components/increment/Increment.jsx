import React from 'react'

const Increment = ({count,Setcoun}) => {
  return (
   <button onClick={()=>{
    Setcoun(count +1)
   }}>Increment</button>
  )
}

export default Increment