import { useState, useReducer,useRef,createContext } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'

const mokData = [
  {
    id:1,
    createDate: new Date("2025-07-23").getTime(),
    content:'hello',
    emotionId:1,
  },
  {
    id:2,
    createDate: new Date("2025-07-24").getTime(),
    content:'hi',
    emotionId:2,
  },
  {
    id:3,
    createDate: new Date("2025-07-26").getTime(),
    content:'good morning',
    emotionId:3,
  },
]
//switch문으로 컨트롤 
function reducer(state,action){
  switch(action.type){
    //추가
    //원래 state(데이터)를 복사하고 전달 받은 새로운 데이터를 앞에 추가
    case 'CREATE':{
      return [action.data,...state]
    }
    // 수정
    // map으로 state(데이터)를 조회하면서 데이터의 id와 전달받은 id가 같으면 전달 받은 데이터를 전달 하고 아니면 두기
    case 'EDIT':{
      return state.map((item)=>{ 
        return String(item.id) === String(action.data.id) ? action.data : item 
      })
    }
    //삭제
    //filter로 조회하면서 전달 받은 아이디랑 동일한 아이디가 없는 데이터만 반환환
    case 'REMOVE':{
      return state.filter((item)=>{
        return String(item.id) !== String(action.data.id)
      })
    }
  }
}
//cotext 생성
//app 밑에 모든 컴포넌트에 지금 data를 전달 할 수 있게 해줌
export const DiaryStateContext = createContext();
//app 밑에 컨트롤할 수 있는 명령어들을 전달
export const DiaryDispatchContext = createContext();

function App() {
  const [data,dispatch] = useReducer(reducer, mokData)
  const idRef = useRef(4)
  
  //일기 추가 reducer로 컨트롤 
  //type은 CREATE, data는 일기 데이터
  //추후에 추가 페이지에 얘만 전달
  const onCreate = (createDate,content,emotionId) => {
    dispatch({
      type:'CREATE',
      data:{
        id:idRef.current++,
        createDate,
        content,
        emotionId,
      }
    })
  }
  //일기 삭제
  const onRemove = (id) => {
    dispatch({
      type:'REMOVE',
      data:{
        id,
      }
    })
  }
  //일기 수정
  const onEdit = (id,createDate,content,emotionId) => {
    dispatch({
      type:'EDIT',
      data:{
        id,
        createDate,
        content,
        emotionId,
      }
    })
  }


  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate,onEdit,onRemove}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/diary/:id' element={<Diary />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  ) 
}

export default App
