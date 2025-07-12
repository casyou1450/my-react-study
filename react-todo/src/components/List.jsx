import React from 'react'

function List({className, todos, handleDelete, handleDone, src}) {
  return (
    <div className={className}>

      <ul>

        {todos
          .filter(todo => {
            if (src === '') {
              return true; // 검색어가 없으면 모든 todo 표시
            } else {
              return todo.text.includes(src); // 검색어가 있으면 포함된 todo만 표시
            }
          })
          .map((todo) => {
          return (
            <li key={todo.id} className={todo.isDone ? 'done' : ''}>

              <input type="checkbox"
              onClick={()=>handleDone(todo.id)}
              checked={todo.isDone}
              />
              

              <span>{todo.text}</span>
              

              <span>{todo.date}</span>
              

              <button  onClick={()=>handleDelete(todo.id)}>삭제</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List