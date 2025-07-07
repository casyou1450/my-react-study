import React from 'react'
import '../css/orderform.css'
import { useState } from 'react';
const OrderForm = () => {

    const [menu, setMenu] = useState(''); 
    const [address, setAddress] = useState('');
    const [issue, setIssue] = useState('');

    const handleMenu=(e)=>{
        return setMenu(e.target.value);
    }
    const handleAddress=(e)=>{
        return setAddress(e.target.value);
    }
    const handleIssue=(e)=>{
        return setIssue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("주문하신 메뉴: " + menu + "\n주문하신 주소: " + address + "\n주문자 요청사항: " + issue);
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="seletMenu">메뉴선택</label>
                <select 
                    name="seletMenu" 
                    id="seletMenu" 
                    value={menu} 
                    onChange={handleMenu}
                >
                    <option value="피자">피자</option>
                    <option value="족발">족발</option>
                    <option value="버거">버거</option>
                    <option value="치킨">치킨</option>
                </select>
            </div>
            <div>
                <label htmlFor="orderAddress">배달받을주소</label>
                <input 
                    type="text" 
                    value={address} 
                    name="orderAddress" 
                    id="orderAddress" 
                    placeholder='주문 받으실 주소를 입력하세요...' 
                    onChange={handleAddress}
                />
            </div>
            <div>
                <label htmlFor="orderIussue">배달요청사항</label>
                <textarea 
                    type="text" 
                    value={issue} 
                    name="orderIussue" 
                    id="orderIussue" 
                    placeholder='요청하실 사항을 입력해주세요...' 
                    onChange={handleIssue}
                />
            </div>
            <div>
                <button type='submit'>주문하기</button>
            </div>
        </form>
    </div>
    )
}

export default OrderForm
