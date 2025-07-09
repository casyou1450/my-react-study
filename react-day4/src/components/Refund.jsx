import React from 'react'

const Refund = ({amount, handleKrw, handleUsd}) => {
  return (
    <div>
      <ul className='refund'>
        <li>
          <label htmlFor="krw">KRW</label>
          <input type="text" name="krw" id="krw" value={amount.krw} onChange={(e) => {handleKrw(e.target.value)}} placeholder='0' />
        </li>
        <li>
          <label htmlFor="usd">USD</label>
          <input type="text" name="usd" id="usd" value={amount.usd} onChange={(e) => {handleUsd(e.target.value)}} placeholder='0' />
        </li>
      </ul>
    </div>
  )
}

export default Refund