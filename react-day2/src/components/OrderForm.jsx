import React from 'react'
import '../css/orderform.css'
import { useState,useRef } from 'react';
const OrderForm = () => {


    const [order,setOrder]=useState({
        menu:'',
        address:'',
        issue:'',
    });
    const handleOrder=(e)=>{
        setOrder({
            ...order,
            [e.target.name]:e.target.value
        });
    }
    const inputRef=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(order.address===""){
            inputRef.current.focus()
            return;
        }
        alert("주문하신 메뉴: " + order.menu + "\n주문하신 주소: " + order.address + "\n주문자 요청사항: " + order.issue);
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="seletMenu">메뉴선택</label>
                <select 
                    name="menu" 
                    id="seletMenu" 
                    value={order.menu} 
                    onChange={handleOrder}
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
                    ref={inputRef}
                    value={order.address} 
                    name="address" 
                    id="orderAddress" 
                    placeholder='주문 받으실 주소를 입력하세요...' 
                    onChange={handleOrder}
                />
            </div>
            <div>
                <label htmlFor="orderIussue">배달요청사항</label>
                <textarea 
                    type="text" 
                    value={order.issue} 
                    name="issue" 
                    id="orderIussue" 
                    placeholder='요청하실 사항을 입력해주세요...' 
                    onChange={handleOrder}
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
