import React, { useState } from 'react'

const InputComp=({count,setCout})=> {
    count[value, setValue]=useState(0)
  return (
    <div><input type="number"value={value} onChange={(e)=>setValue(e.target.valueAsNumber)} />
    <button onClick={()=>{setCout(count+value)}}>
        Inc By Value</button></div>
  )
}

export default InputComp

