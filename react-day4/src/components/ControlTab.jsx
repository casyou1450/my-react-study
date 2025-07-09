import React from 'react'
import '../css/layout.css'

const ControlTab = ({setCount}) => {
  const plusCounter=(value)=>{
    setCount(prev=>prev+value);
  }
  const minusCounter=(value)=>{
    setCount(prev=>prev-value);
  }
  
  return (
    <div>
      <ul className='controlTab'>
        <li><button onClick={()=>plusCounter(1)}>+1</button></li>
        <li><button onClick={()=>plusCounter(10)}>+10</button></li>
        <li><button onClick={()=>plusCounter(100)}>+100</button></li>
        <li><button onClick={()=>plusCounter(1000)}>+1000</button></li>
      </ul>
      <ul className='controlTab'>
        <li><button onClick={()=>minusCounter(1)}>-1</button></li>
        <li><button onClick={()=>minusCounter(10)}>-10</button></li>
        <li><button onClick={()=>minusCounter(100)}>-100</button></li>
        <li><button onClick={()=>minusCounter(1000)}>-1000</button></li>
      </ul> 
    </div>
  )
}

export default ControlTab