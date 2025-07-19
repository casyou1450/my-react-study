import "../css/ContactItem.css";
import { memo } from "react";

//연락처 출력을 위한 state 'address' 하고 삭제를 위한 handleDel 
const ContactItem = ({address,handleDel}) => {
  return (
    <>
      {
       address.map((addr)=>{
        return (
          <div key={addr.id} className="ContactItem">
            <div className="name">{addr.name}</div>
            <div className="contact">{addr.email}</div>
            <button onClick={()=>handleDel(addr.id)}>🗑️ Remove</button>
          </div>
        )
       }) 
      }
    </>
  );
}

export default memo(ContactItem);
