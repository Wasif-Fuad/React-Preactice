import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const contactContext = React.createContext();

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  function createContact(id, name) {
    setContacts((prev) => {
      return [...prev, { id, name }];
    });
  }
  return (
    <contactContext.Provider value={{ contacts, createContact }}>
      {children}
    </contactContext.Provider>
  );
}

export function useContact() {
  return useContext(contactContext);
}
