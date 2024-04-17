import React from 'react';

// eslint-disable-next-line react/prop-types
function InputField({ label, type, value, onChange, name }) {
  return (
    <div>
      <label>{label}:</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default InputField;
