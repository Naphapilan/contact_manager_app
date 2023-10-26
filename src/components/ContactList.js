import React from "react";
import ContactCard from "./ContactCard";
import EditContact from "./EditContact"; // นำเข้า EditContact

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const editContact = (contact) => {
    props.editContact(contact);
  };

  const updateContact = (updatedContact) => {
    props.updateContact(updatedContact);
  };
  const editContactHandler = (id, name, email) => {
    props.editContact({ id, name, email });
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        deleteContact={deleteContactHandler}
        editContact={editContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="ui celled list">
      {renderContactList}
      {props.editingContact && (
        <EditContact
          contact={props.editingContact}
          updateContact={updateContact} // ส่งฟังก์ชัน updateContact ไปให้ EditContact
        />
      )}
    </div>
  );
};

export default ContactList;
