import React from "react";

export default function Input({ value, id, name, label, error, onChange }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input value={value} id={id} name={name} onChange={onChange} />
      <p className={"error"}>{error}</p>
    </div>
  );
}
