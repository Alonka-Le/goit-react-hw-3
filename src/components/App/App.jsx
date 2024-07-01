import { useState, useEffect } from "react";
import contact from "../../contact.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem("contacts");
    if (contacts !== null) {
      return JSON.parse(contacts);
    }
    return contact;
  });

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const handleDelete = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleChange={handleChange} inputValue={inputValue} />
      <ContactList
        filteredContacts={filteredContacts}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
