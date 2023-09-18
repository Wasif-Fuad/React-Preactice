import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContact } from "./ContactsProvider";
const conversationContext = React.createContext();

export function ConversationProvider({ children }) {
  const [conversations, setConversation] = useLocalStorage("conversation", []);
  console.log("convo", conversations);
  const { contacts } = useContact();
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);

  function createConversation(recipients) {
    setConversation((prev) => {
      return [...prev, { recipients }];
    });
  }

  const formattedConversation = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map((user) => {
      const contact = contacts.find((contact) => {
        if (contact.id == user) return contact;
      });
      const name = (contact && contact.name) || user;
      return { id: user, name };
    });
    const selected = index === selectedConversationIndex;
    return { ...conversations, recipients, selected };
  });

  console.log("format", formattedConversation);

  return (
    <conversationContext.Provider
      value={{
        conversations: formattedConversation,
        createConversation,
        selectConversationIndex: setSelectedConversationIndex,
        selectedConversation: formattedConversation[selectedConversationIndex],
      }}
    >
      {children}
    </conversationContext.Provider>
  );
}

export function useConversation() {
  return useContext(conversationContext);
}
