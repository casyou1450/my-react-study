import React from 'react'

const Amount = ({amount, handleAmount}) => {
  return (
    <div>
      <ul className='refund'>
        <li>
          <label htmlFor="krw">KRW</label>
          <input type="text" name="krw" id="krw" value={amount.krw} onChange={(e) => {handleAmount(e.target.value,e.target.name)}} placeholder='0' />
        </li>
        <li>
          <label htmlFor="usd">USD</label>
          <input type="text" name="usd" id="usd" value={amount.usd} onChange={(e) => {handleAmount(e.target.value,e.target.name)}} placeholder='0' />
        </li>
      </ul>
    </div>
  )
}

export default Amount
