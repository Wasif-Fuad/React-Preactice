import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Login from "./login";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationProvider } from "../context/ConversationProvider";
function App() {
  const [id, setid] = useLocalStorage("id");

  return id ? (
    <ContactsProvider>
      <ConversationProvider>
        <Dashboard id={id} />
      </ConversationProvider>
    </ContactsProvider>
  ) : (
    <Login onIdSubmit={setid} />
  );
}

export default App;
