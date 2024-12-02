import React, { useState } from 'react'

function UseOfState() {
    const[count,setCount]=useState(100)
    function increament(){
        setCount(count+4)

    }
    function decrement(){
        setCount(count-10)
    }
  return (
    <div>
        <div>
        <h2>{count}</h2>
    
    </div>
    <div>
    <button onClick={increament}>Doincreament</button>
    <button onClick={decrement}>dodecreament</button>
</div>
</div>
  )
}

export default UseOfState
