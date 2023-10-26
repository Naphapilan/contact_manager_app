import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact"; // นำเข้า EditContact

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const [editingContact, setEditingContact] = useState(null); // เพิ่ม state สำหรับแก้ไขข้อมูล

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };


  const editContact = (contact) => {
    setEditingContact(contact);
  };

  const updateContactHandler = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      {editingContact ? (
        <EditContact
          contact={editingContact}
          onEditContact={updateContactHandler} // ส่งฟังก์ชัน updateContactHandler ไปให้ EditContact
        />
      ) : 
      (
        <>
          <AddContact addContactHandler={addContactHandler} />
          <ContactList
            contacts={contacts}
            getContactId={removeContactHandler}
            editContact={editContact}
            //editContactHandler={editContactHandler} // เพิ่มบรรทัดนี้

            //onEditContact={editContactHandler} // ตรวจสอบให้แน่ใจว่า prop ถูกส่งไปถูกที่
            />
        </>
      )}
    </div>
  );
};

export default App;
