import React from "react";
import "./RecordItem.css";

function RecordItem({ record }) {
  return (
    <div className="record-item">
      <div className="record-id">{record.id}</div>
      <div className="record-name">{record.name}</div>
      <div className="record-description">{record.description}</div>
    </div>
  );
}

export default RecordItem;
