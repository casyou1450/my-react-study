import React from 'react'
import Input from './Input'
import Search from './Search'
import List from './List'
import { useState } from 'react'

function Wrap({ className }) {
    // 투두들을 저장할 useState
    const [todos, setTodos] = useState([])

    // 새로 입력할 투두의 useState
    const [todo, setTodo] = useState('')
    
    // 검색어를 저장할 useState
    const [sch, setSch] = useState('')

    // 할일을 추가
    const handleSubmit = (todo) => {
        setTodos([...todos, {
            id: Date.now(),
            text: todo,
            isDone: false,
            date: new Date().toLocaleDateString()
        }])
        setTodo('')
    }
    
    // 할일을 제거
    // id를 전달 받아 왔음
    // filter로 todo에 부여된 고유한 id가 같지 않은 애들만 다시 배열로 저장
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    // 완료 여부를 체크함
    // id를 전달 받아 왔음
    // map으로 배열을 돌리면서 id가 같은걸 찾아냄
    // 찾아낸 todo의 isDone값을 지금 상태의 반대로 바꿈
    const handleDone = (id) => {
        setTodos(todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, isDone: !todo.isDone }
          }
          return todo
        }))
    }

    // 할일을 검색함
    // search 할 것을 받아옴
    // filterTodo 임시 저장을 생성해서 todos를 filer로 다시 배열화 함
    // 이때 includes를 이용해서 내가 요청한 문자열만 있는거만 하는거임
    // 
    const handleSearch = (search) => {
        setSch(search);
    }
    return (
        <div className={className}>
            {/* 할일을 입력하는 컴포넌트 */}
            <Input className="Input" todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />

            {/* 할일을 검색하는 컴포넌트 */}
            <Search className="Search" handleSearch={handleSearch} />

            {/* 할일 목록을 보여주는 컴포넌트 */}
            <List className="List" todos={todos} setTodos={setTodos} handleDelete={handleDelete} handleDone={handleDone} src={sch}/>
        </div>
    )
}

export default Wrap