import "../css/ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({address,handleDel}) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      <ContactItem address={address} handleDel={handleDel} />
    </div>
  );
}
