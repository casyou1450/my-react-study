import React from 'react'

function Input({className, todo, setTodo, handleSubmit}) {
  return (
    <div className={className}>
        <form onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit(todo);
        }}>
            <input type="text" 
            value={todo}  
            onChange={(e) => setTodo(e.target.value)}  
            placeholder="할 일을 입력해주세요." />  
            <button type="submit">추가</button>
        </form>
    </div>
  )
}

export default Input