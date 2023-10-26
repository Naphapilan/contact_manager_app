import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [data, setData] = useState("");

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>Data: {data}</h1>
      <ChildComponent updateData={updateData} />
    </div>
  );
}

export default ParentComponent;
