import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const editContactHandler = () => {
    props.editContact(id, name, email);
  };

  const deleteContactHandler = () => {
    props.deleteContact(id);
  };

  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
        onClick={editContactHandler}
      ></i>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
        onClick={deleteContactHandler}
      ></i>
    </div>
  );
};

export default ContactCard;
