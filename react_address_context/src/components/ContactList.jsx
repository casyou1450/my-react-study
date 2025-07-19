import "../css/ContactList.css";
import ContactItem from "./ContactItem";
import { memo } from "react";

const ContactList=() => {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      <ContactItem />
    </div>
  );
}


export default memo(ContactList)