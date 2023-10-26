import React from "react";

function ChildComponent({ updateData }) {
  const handleClick = () => {
    const newData = "Updated Data";
    updateData(newData);
  };

  return <button onClick={handleClick}>Update Data</button>;
}

export default ChildComponent;
