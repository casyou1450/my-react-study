import { useReducer, useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

//재랜더링 되어도 재생성되지 않게 하기 위해 외부에서 생성
//현재 상태와 행동할 액션
//밑에 핸들러에서 호출한 명령어를 기준으로 ADD할건지 DEL할건지 
//state는 밑에 선언한 address..
//payload는 명령어
const addAddress = (state, payload) => {
  switch (payload.type) {
    case "ADD":
      return [payload.data, ...state];
    case "DEL":
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
}

function App() {
  const idRef = useRef(0);
  //dispatch 상태변화 알려주는 부분
  //useReducer(addAddress, []) 상태변환 함수 이름, 초기 값
  const [address, dispatch] = useReducer(addAddress, []);

  //저장하는 핸들러, 이름 하고 이메일 받아서 reducer 호출 하는데 ADD라는 명령어로 호출
  //data = reducer에 전달할 데이터 (내가 입력한 정보)
  const handleAdd = (name, email) => {
    dispatch({
      type: "ADD",
      data: { 
        id: idRef.current++,
        name: name,
        email: email,
      }
    })
  }
  //id 값을 받아와서 reducer에 DEL 호출 id도 보내서
  const handleDel = (id) => {
    dispatch({
      type: "DEL",
      id: id
    })
  }
  
  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor handleAdd={handleAdd} />
      </section>
      <section>
        <ContactList handleDel={handleDel} address={address} />
      </section>
    </div>
  );
}

export default App;
