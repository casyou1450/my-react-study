import { useRef, useState, memo } from "react";
import "../css/ContactEditor.css";

const ContactEditor=({handleAdd}) => {
  //입력 받은거 저장할려구..
  const [state,setState]=useState({
    name:'',
    email:""
  })
  //입력폼 상태변화 체크 후 ele 컨트롤 위한 ref
  const refName=useRef();
  const refEmail=useRef();
  //
  //입력폼 name 으로 여러 입력폼 상태 저장
  const handleState = (e)=> {
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  //submit 했을때 ref로 상태 변화가 있는지 체크해서 element 컨트롤
  //있으면 handleAdd 호출
  const onSubmit = () => {
    if(state.name===""){
      refName.current.focus()
      return;
    }
    else if(state.email===""){
      refEmail.current.focus()
      return;
    } else{
      handleAdd(state.name,state.email);
      // 입력 후 필드 초기화
      setState({
        name: '',
        email: ''
      });
    }
  }
  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input className="name" name="name" ref={refName} value={state.name} onChange={handleState} placeholder="이름 ..." />
        <input className="contact" name="email" ref={refEmail} value={state.email} onChange={handleState} placeholder="연락처(이메일) ..." />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}

export default memo(ContactEditor)