import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(contactReducer, []);
  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor />
      </section>
      <section>
        <ContactList />
      </section>
    </div>
  );
}

export default App;
