import "../css/ContactList.css";
import ContactItem from "./ContactItem";
import { memo } from "react";

const ContactList=({address,handleDel}) => {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      <ContactItem address={address} handleDel={handleDel} />
    </div>
  );
}


export default memo(ContactList)