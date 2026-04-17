import React from "react";

export default function ({ name, id, label, options, onChange, value, error }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={id} value={value} onChange={onChange}>
        <option value="" hidden>
          {"Select Category"}
        </option>
        {options.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      <p className={"error"}>{error}</p>
    </div>
  );
}
