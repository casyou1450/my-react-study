import Amount from './Amount'
import React from 'react'
import { useState } from 'react'
import '../css/layout.css'

const Wrap = () => {
  const [amount,setAmounts]=useState({
    target:'',
    krw:'', 
    usd:'',  
  })
  
  // KRW 입력 시: USD = KRW * 1300
  // USD 입력 시: KRW = USD / 1300
  const handleAmount = (value,name) => {
    if(name==="krw"){
      setAmounts({
        krw: value,
        usd: Number(value) / 1300,
      })
    }else{
      setAmounts({
        krw: Number(value) * 1300,
        usd: value
      })
    }
  }

  return (
    <div className='wrap'>
        <Amount amount={amount} handleAmount={handleAmount}/>
    </div>
  )
}

export default Wrap
