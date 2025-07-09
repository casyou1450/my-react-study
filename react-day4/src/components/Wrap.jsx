import Refund from './Refund'
import React from 'react'
import { useState } from 'react'
import '../css/layout.css'

const Wrap = () => {
  const [amount,setAmounts]=useState({
    krw:'', 
    usd:'',  
  })
  
  // KRW 입력 시: USD = KRW * 1300
  const handleKrw = (value) => {
    setAmounts({
      krw: value,
      usd: Number(value) / 1300,
    })
  }
  
  // USD 입력 시: KRW = USD / 1300
  const handleUsd = (value) => {
    setAmounts({
      krw: Number(value) * 1300,
      usd: value
    })
  }
  
  return (
    <div className='wrap'>
        <Refund amount={amount} handleKrw={handleKrw} handleUsd={handleUsd}/>
    </div>
  )
}

export default Wrap